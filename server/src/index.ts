import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import db from './config/db.js';
import { PoolConnection } from 'mysql2/promise';

import authRoutes from './routes/auth.js';
import bookingRoutes from './routes/booking.js';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api', bookingRoutes);

// Seed default admin if not exists
import bcryptjs from 'bcryptjs';
const seedAdmin = async () => {
  try {
    const [rows]: any = await (db as any).query('SELECT user_id FROM Users WHERE email = ?', ['admin@umtsporthub.local']);
    if (rows.length === 0) {
      const salt = await bcryptjs.genSalt(10);
      const hash = await bcryptjs.hash('Admin@123', salt);
      await (db as any).query(
        'INSERT INTO Users (full_name, phone_number, password_hash, email, role) VALUES (?, ?, ?, ?, ?)',
        ['Admin', '0000000000', hash, 'admin@umtsporthub.local', 'admin']
      );
      console.log('Seeded default admin: admin@umtsporthub.local / Admin@123');
    }
  } catch (e: any) {
    console.error('Admin seed error:', e?.message);
  }
};

seedAdmin();

// Seed sample data (venues, pitches, timeslots) for demo if empty
const seedSampleData = async () => {
  try {
    const [venueCount]: any = await (db as any).query('SELECT COUNT(*) as cnt FROM Venues');
    if (venueCount[0].cnt === 0) {
      const [u]: any = await (db as any).query('SELECT user_id FROM Users ORDER BY user_id LIMIT 1');
      const ownerId = u.length ? u[0].user_id : null;
      if (!ownerId) return;
      const [venue]: any = await (db as any).query(
        'INSERT INTO Venues (owner_id, venue_name, address, city, district, opening_time, closing_time) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [ownerId, 'UMT Sports Complex', '123 Nguyễn Văn B, Quận 7', 'HCM', 'Quận 7', '06:00', '22:00']
      );
      const venueId = venue.insertId;
      const pitches: Array<[string, string]> = [
        ['Sân 5A', '5v5'],
        ['Sân 5B', '5v5'],
        ['Sân 7A', '7v7'],
      ];
      for (const [name, type] of pitches) {
        const [p]: any = await (db as any).query(
          'INSERT INTO Pitches (venue_id, pitch_name, pitch_type, surface_type, status) VALUES (?, ?, ?, ?, ?)',
          [venueId, name, type, 'Artificial grass', 'available']
        );
        const pid = p.insertId;
        const slotDefs: Array<[string, string, string, number]> = [
          ['weekday', '18:00', '19:00', 120000],
          ['weekday', '19:00', '20:00', 130000],
          ['weekend', '18:00', '19:00', 150000],
          ['weekend', '19:00', '20:00', 160000],
        ];
        for (const s of slotDefs) {
          await (db as any).query(
            'INSERT INTO TimeSlots (pitch_id, day_of_week, start_time, end_time, price) VALUES (?, ?, ?, ?, ?)',
            [pid, s[0], s[1], s[2], s[3]]
          );
        }
      }
      console.log('Seeded sample venues/pitches/timeslots');
    }
  } catch (e: any) {
    console.error('Seed sample data error:', e?.message);
  }
};

seedSampleData();

// Test DB Connection on startup
const testDbConnection = async () => {
  try {
    const connection = await db.getConnection();
    console.log('Database connected successfully!');
    connection.release();
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
};

testDbConnection();

// API Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from UMT Sport Hub API!');
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
