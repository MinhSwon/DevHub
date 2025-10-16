import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import authRoutes from './routes/auth.js';
import bookingRoutes from './routes/booking.js';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ensure schema exists by executing database.sql once at startup (idempotent)
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function ensureSchema() {
  try {
    const sqlPath = join(__dirname, 'database.sql');
    const sql = readFileSync(sqlPath, 'utf8');
    // Split to run CREATE DATABASE first without using current db
    await db.query(sql);
    console.log('Database schema ensured.');
  } catch (e) {
    console.error('Failed to ensure schema:', e.message);
  }
}

ensureSchema()
  .then(async () => {
    // Test DB Connection on startup
    const connection = await db.getConnection();
    console.log('MySQL database connected successfully.');
    connection.release();
  })
  .catch((error) => {
    console.error('Failed to connect to MySQL database:', error.message);
  });

// Seed sample data (venues, pitches, timeslots) for demo if empty
async function seedSampleData() {
  try {
    const [venueCount] = await db.query('SELECT COUNT(*) as cnt FROM Venues');
    if (venueCount[0].cnt === 0) {
      const [u] = await db.query('SELECT user_id FROM Users ORDER BY user_id LIMIT 1');
      const ownerId = u.length ? u[0].user_id : null;
      if (!ownerId) return;
      const [venue] = await db.query(
        'INSERT INTO Venues (owner_id, venue_name, address, city, district, opening_time, closing_time) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [ownerId, 'UMT Sports Complex', '123 Nguyễn Văn B, Quận 7', 'HCM', 'Quận 7', '06:00', '22:00']
      );
      const venueId = venue.insertId;
      const pitches = [
        ['Sân 5A', '5v5'],
        ['Sân 5B', '5v5'],
        ['Sân 7A', '7v7'],
      ];
      for (const [name, type] of pitches) {
        const [p] = await db.query(
          'INSERT INTO Pitches (venue_id, pitch_name, pitch_type, surface_type, status) VALUES (?, ?, ?, ?, ?)',
          [venueId, name, type, 'Artificial grass', 'available']
        );
        const pid = p.insertId;
        // simple timeslots: 18:00-19:00, 19:00-20:00 weekday/weekend with different prices
        const slotDefs = [
          ['weekday', '18:00', '19:00', 120000],
          ['weekday', '19:00', '20:00', 130000],
          ['weekend', '18:00', '19:00', 150000],
          ['weekend', '19:00', '20:00', 160000],
        ];
        for (const s of slotDefs) {
          await db.query(
            'INSERT INTO TimeSlots (pitch_id, day_of_week, start_time, end_time, price) VALUES (?, ?, ?, ?, ?)',
            [pid, s[0], s[1], s[2], s[3]]
          );
        }
      }
      console.log('Seeded sample venues/pitches/timeslots');
    }
  } catch (e) {
    console.error('Seed sample data error:', e.message);
  }
}

seedSampleData();

// API Routes
app.get('/', (req, res) => {
  res.send('Welcome to the UMT Sport Hub API!');
});

// Auth routes
app.use('/api/auth', authRoutes);
// Booking routes
app.use('/api', bookingRoutes);

// Seed default admin if not exists
async function seedAdmin() {
  try {
    const [rows] = await db.query('SELECT user_id FROM Users WHERE email = ?', ['admin@umtsporthub.local']);
    if (rows.length === 0) {
      const bcrypt = (await import('bcryptjs')).default;
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash('Admin@123', salt);
      await db.query(
        'INSERT INTO Users (full_name, phone_number, password_hash, email, role) VALUES (?, ?, ?, ?, ?)',
        ['Admin', '0000000000', hash, 'admin@umtsporthub.local', 'admin']
      );
      console.log('Seeded default admin: admin@umtsporthub.local / Admin@123');
    }
  } catch (e) {
    console.error('Admin seed error:', e.message);
  }
}

seedAdmin();

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
