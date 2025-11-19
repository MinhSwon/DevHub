import db from '../config/db.js';

// 1. USERS
export const listUsersForAdmin = async (req, res) => {
  try {
    const result = await db.query(
      `SELECT id, full_name, email, role, status, created_at
       FROM users
       ORDER BY created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    console.error('listUsersForAdmin error:', err);
    res.status(500).json({ error: 'Failed to load users' });
  }
};

// 2. EVENTS
export const adminCreateEvent = async (req, res) => {
  const { title, description, sportId, location, startTime, endTime, eventType, maxParticipants } =
    req.body;
  const creatorId = req.user?.id;

  if (!creatorId || !title || !startTime || !endTime) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const sportIdToUse = sportId || 1;
    const eventTypeToUse = eventType || 'tournament';

    const result = await db.query(
      `INSERT INTO events (title, description, sport_id, location, start_time, end_time, event_type, max_participants, created_by_user_id)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
       RETURNING id`,
      [
        title,
        description || null,
        sportIdToUse,
        location || null,
        startTime,
        endTime,
        eventTypeToUse,
        maxParticipants || null,
        creatorId,
      ],
    );

    res.status(201).json({ id: result.rows[0].id });
  } catch (err) {
    console.error('adminCreateEvent error:', err);
    res.status(500).json({ error: 'Failed to create event' });
  }
};

export const adminListEvents = async (_req, res) => {
  try {
    const result = await db.query(
      `SELECT id, title, description, location, start_time, end_time, event_type, status
       FROM events
       ORDER BY start_time DESC`,
    );
    res.json(result.rows);
  } catch (err) {
    console.error('adminListEvents error:', err);
    res.status(500).json({ error: 'Failed to load events' });
  }
};

// 3. NEWS & COMMUNITY (dùng bảng posts + category)
export const adminCreatePost = async (req, res) => {
  const { title, content, category } = req.body;
  const userId = req.user?.id;

  if (!userId || !title || !content || !category) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const result = await db.query(
      `INSERT INTO posts (user_id, title, content, category)
       VALUES ($1,$2,$3,$4)
       RETURNING id`,
      [userId, title, content, category],
    );
    res.status(201).json({ id: result.rows[0].id });
  } catch (err) {
    console.error('adminCreatePost error:', err);
    res.status(500).json({ error: 'Failed to create post' });
  }
};

export const adminListPostsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const result = await db.query(
      `SELECT id, title, content, category, created_at
       FROM posts
       WHERE category = $1
       ORDER BY created_at DESC`,
      [category],
    );
    res.json(result.rows);
  } catch (err) {
    console.error('adminListPostsByCategory error:', err);
    res.status(500).json({ error: 'Failed to load posts' });
  }
};

// 4. PITCHES & TIMESLOTS
export const adminListPitches = async (_req, res) => {
  try {
    const rows = await db.query(
      `SELECT p.pitch_id, p.pitch_name, p.pitch_type, p.surface_type, p.status,
              v.venue_name
       FROM Pitches p
       JOIN Venues v ON p.venue_id = v.venue_id
       ORDER BY v.venue_name, p.pitch_name`,
    );
    res.json(rows.rows);
  } catch (err) {
    console.error('adminListPitches error:', err);
    res.status(500).json({ error: 'Failed to load pitches' });
  }
};

export const adminUpdatePitch = async (req, res) => {
  const { id } = req.params;
  const { pitchName, pitchType, surfaceType, status } = req.body;

  try {
    const result = await db.query(
      `UPDATE Pitches
       SET pitch_name = COALESCE($1, pitch_name),
           pitch_type = COALESCE($2, pitch_type),
           surface_type = COALESCE($3, surface_type),
           status = COALESCE($4, status)
       WHERE pitch_id = $5
       RETURNING pitch_id`,
      [pitchName || null, pitchType || null, surfaceType || null, status || null, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Pitch not found' });
    }

    res.json({ pitchId: result.rows[0].pitch_id });
  } catch (err) {
    console.error('adminUpdatePitch error:', err);
    res.status(500).json({ error: 'Failed to update pitch' });
  }
};

export const adminCreateTimeSlot = async (req, res) => {
  const { pitchId } = req.params;
  const { dayOfWeek, startTime, endTime, price } = req.body;

  if (!dayOfWeek || !startTime || !endTime || !price) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const result = await db.query(
      `INSERT INTO TimeSlots (pitch_id, day_of_week, start_time, end_time, price)
       VALUES ($1,$2,$3,$4,$5)
       RETURNING timeslot_id`,
      [pitchId, dayOfWeek, startTime, endTime, price],
    );
    res.status(201).json({ timeslotId: result.rows[0].timeslot_id });
  } catch (err) {
    console.error('adminCreateTimeSlot error:', err);
    res.status(500).json({ error: 'Failed to create timeslot' });
  }
};



