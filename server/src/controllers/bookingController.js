import db from '../config/db.js';

export const listPitches = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT p.pitch_id, p.pitch_name, p.pitch_type, p.surface_type, p.image_url, p.status,
              v.venue_id, v.venue_name, v.address, v.city, v.district
       FROM Pitches p
       JOIN Venues v ON p.venue_id = v.venue_id
       WHERE p.status = 'available'`
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load pitches' });
  }
};

export const getAvailability = async (req, res) => {
  const { pitchId } = req.params;
  const { date } = req.query; // YYYY-MM-DD
  if (!date) return res.status(400).json({ error: 'date is required (YYYY-MM-DD)' });
  try {
    // Determine weekday/weekend
    const day = new Date(date).getDay();
    const isWeekend = day === 0 || day === 6 ? 'weekend' : 'weekday';

    const [slots] = await db.query(
      `SELECT t.timeslot_id, t.start_time, t.end_time, t.price
       FROM TimeSlots t
       WHERE t.pitch_id = ? AND t.day_of_week = ?
       ORDER BY t.start_time`,
      [pitchId, isWeekend]
    );

    const [bookings] = await db.query(
      `SELECT start_time, end_time
       FROM Bookings
       WHERE pitch_id = ? AND booking_date = ? AND status IN ('pending','confirmed','completed')`,
      [pitchId, date]
    );

    const isOverlapping = (s1, e1, s2, e2) => s1 < e2 && s2 < e1;
    const availability = slots.map((s) => {
      const taken = bookings.some((b) => isOverlapping(s.start_time, s.end_time, b.start_time, b.end_time));
      return { ...s, available: !taken };
    });
    res.json({ date, pitchId: Number(pitchId), slots: availability });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load availability' });
  }
};

export const createBooking = async (req, res) => {
  const userId = req.user?.id || req.body.userId; // fallback
  const { pitchId, date, startTime, endTime } = req.body;
  if (!userId || !pitchId || !date || !startTime || !endTime) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    // Get price from timeslot
    const day = new Date(date).getDay();
    const isWeekend = day === 0 || day === 6 ? 'weekend' : 'weekday';
    const [slotRows] = await db.query(
      `SELECT price FROM TimeSlots WHERE pitch_id = ? AND day_of_week = ? AND start_time = ? AND end_time = ?`,
      [pitchId, isWeekend, startTime, endTime]
    );
    if (slotRows.length === 0) return res.status(400).json({ error: 'Invalid timeslot' });

    // Check conflict
    const [conflicts] = await db.query(
      `SELECT booking_id FROM Bookings WHERE pitch_id = ? AND booking_date = ? AND status IN ('pending','confirmed','completed')
       AND NOT (end_time <= ? OR start_time >= ?)`,
      [pitchId, date, startTime, endTime]
    );
    if (conflicts.length > 0) return res.status(409).json({ error: 'Timeslot already booked' });

    const price = slotRows[0].price;
    const [result] = await db.query(
      `INSERT INTO Bookings (user_id, pitch_id, booking_date, start_time, end_time, total_price, status)
       VALUES (?, ?, ?, ?, ?, ?, 'pending')`,
      [userId, pitchId, date, startTime, endTime, price]
    );
    res.status(201).json({ bookingId: result.insertId, status: 'pending' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

export const cancelBooking = async (req, res) => {
  const userId = req.user?.id || req.body.userId;
  const { id } = req.params;
  try {
    const [rows] = await db.query(`SELECT user_id, status FROM Bookings WHERE booking_id = ?`, [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Booking not found' });
    const booking = rows[0];
    if (userId && booking.user_id !== userId) return res.status(403).json({ error: 'Forbidden' });
    if (booking.status === 'cancelled') return res.json({ bookingId: Number(id), status: 'cancelled' });
    await db.query(`UPDATE Bookings SET status = 'cancelled' WHERE booking_id = ?`, [id]);
    res.json({ bookingId: Number(id), status: 'cancelled' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to cancel booking' });
  }
};


