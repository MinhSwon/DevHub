import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import db from './config/db.js'; // pg Pool
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

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
    const res = await db.query('SELECT id FROM users WHERE email = $1', ['admin@umtsporthub.local']);
    if (res.rows.length === 0) {
      const salt = await bcryptjs.genSalt(10);
      const hash = await bcryptjs.hash('Admin@123', salt);
      await db.query(
        'INSERT INTO users (full_name, email, password_hash, role, status) VALUES ($1, $2, $3, $4, $5)',
        ['Admin', 'admin@umtsporthub.local', hash, 'admin', 'active']
      );
      console.log('Seeded default admin: admin@umtsporthub.local / Admin@123');
    }
  } catch (e: any) {
    console.error('Admin seed error:', e?.message);
  }
};

// Seed sample data
const seedSampleData = async () => {
  try {
    // Add sample sports
    const sports = [
      ['Football', 'The beautiful game'],
      ['Basketball', 'Hoops and dreams'],
      ['Volleyball', 'Spike it!'],
      ['Badminton', 'Shuttle power'],
      ['Tennis', 'Ace it!']
    ];
    
    for (const [name, description] of sports) {
      await db.query(
        'INSERT INTO sports (name, description) VALUES ($1, $2) ON CONFLICT (name) DO NOTHING',
        [name, description]
      );
    }

    // Get admin user for creating teams
    const adminRes = await db.query('SELECT id FROM users WHERE email = $1', ['admin@umtsporthub.local']);
    if (adminRes.rows.length === 0) return;
    const adminId = adminRes.rows[0].id;

    // Add sample teams
    const sportsRes = await db.query('SELECT id, name FROM sports');
    for (const sport of sportsRes.rows) {
      await db.query(
        'INSERT INTO teams (name, sport_id, description, type, created_by_user_id) VALUES ($1, $2, $3, $4, $5) ON CONFLICT DO NOTHING',
        [`UMT ${sport.name} Team`, sport.id, `Official ${sport.name} team of UMT`, 'official_team', adminId]
      );
    }

    console.log('✅ Sample data seeded successfully');
  } catch (e: any) {
    console.error('Seed sample data error:', e?.message);
  }
};

// Helper: test DB connection
const testDbConnection = async () => {
  try {
    const r = await db.query('SELECT NOW()');
    if (r) console.log('\u2705 Database connected successfully!');
  } catch (error) {
    console.error('\u274c Error connecting to database:', error);
    throw error;
  }
};

// Ensure the main schema (database.sql) is executed before seeding
const ensureSchema = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    // Prefer legacy schema that matches seeders (user_id, venue_id, pitch_id). If not present, fall back to database.sql
    // When running from dist, __dirname will point to dist; schema files live in src. Use ../src/* to locate them reliably.
    const legacyPath = join(__dirname, '..', 'src', 'schema-legacy.sql');
    let schemaPath = legacyPath;
    if (!existsSync(legacyPath)) {
      schemaPath = join(__dirname, '..', 'src', 'database.sql');
    }
    console.log('🔧 Ensuring DB schema from', schemaPath);
    const schema = readFileSync(schemaPath, 'utf8');
    // Run the whole SQL file in one go. Postgres accepts multiple statements in one query.
    await db.query(schema);
    console.log('✅ Database schema ensured.');
  } catch (err: any) {
    // Schema script may partially fail if some types/tables already exist. Log and continue.
    console.warn('⚠️ Schema execution reported error (continuing):', (err as any)?.message || err);
    return;
  }
};

// Start sequence: test connection -> ensure schema -> seed -> start server
const start = async () => {
  try {
    await testDbConnection();
    await ensureSchema();
    await seedAdmin();
    await seedSampleData();
    // Start Server
    app.listen(port, () => {
      console.log(`\ud83d\ude80 Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', (err as any)?.message || err);
    process.exit(1);
  }
};

start();

// API Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from UMT Sport Hub API!');
});