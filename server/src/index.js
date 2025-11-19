import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import authRoutes from './routes/auth.js';
import bookingRoutes from './routes/booking.js';
import adminRoutes from './routes/admin.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bcrypt from 'bcryptjs'; // Import bcrypt ở trên cùng

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/', (req, res) => {
  res.send('Welcome to the UMT Sport Hub API!');
});
app.use('/api/auth', authRoutes);
app.use('/api', bookingRoutes);
app.use('/api/admin', adminRoutes);

// --- CÁC HÀM KHỞI TẠO VÀ SEED DATA ---

// Hàm 1: Đảm bảo schema database tồn tại
async function ensureSchema() {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const sqlPath = join(__dirname, 'database.sql');
    const sql = readFileSync(sqlPath, 'utf8');
    
    // Tách các câu lệnh SQL bằng dấu chấm phẩy (;)
    const statements = sql.split(';').filter(s => s.trim().length > 0);
    
    // Thực thi tuần tự từng câu lệnh một
    for (const statement of statements) {
      await db.query(statement);
    }
    console.log('✅ Database schema ensured successfully.');
  } catch (e) {
    console.error('❌ Failed to ensure schema:', e.message);
    throw e; // Ném lỗi ra ngoài để dừng quá trình khởi động
  }
}

// Hàm 2: Seed tài khoản admin mặc định
async function seedAdmin() {
  try {
    const [rows] = await db.query('SELECT user_id FROM Users WHERE email = ?', ['admin@umtsporthub.local']);
    if (rows.length === 0) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash('Admin@123', salt);
      await db.query(
        'INSERT INTO Users (full_name, phone_number, password_hash, email, role) VALUES (?, ?, ?, ?, ?)',
        ['Admin', '0000000000', hash, 'admin@umtsporthub.local', 'admin']
      );
      console.log('✅ Seeded default admin: admin@umtsporthub.local / Admin@123');
    }
  } catch (e) {
    console.error('❌ Admin seed error:', e.message);
    throw e;
  }
}

// Hàm 3: Seed dữ liệu mẫu (sân, giờ,...)
async function seedSampleData() {
  try {
    const [venueCount] = await db.query('SELECT COUNT(*) as cnt FROM Venues');
    if (venueCount[0].cnt > 0) return; // Nếu đã có dữ liệu thì không làm gì cả

    // Lấy user admin vừa tạo để làm chủ sân
    const [users] = await db.query("SELECT user_id FROM Users WHERE role = 'admin' LIMIT 1");
    if (users.length === 0) {
      console.warn('⚠️ Cannot seed sample data: No admin user found.');
      return;
    }
    const ownerId = users[0].user_id;

    const [venue] = await db.query(
      'INSERT INTO Venues (owner_id, venue_name, address, city, district, opening_time, closing_time) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [ownerId, 'UMT Sports Complex', '123 Nguyễn Văn B, Quận 7', 'HCM', 'Quận 7', '06:00', '22:00']
    );
    const venueId = venue.insertId;

    const pitches = [['Sân 5A', '5v5'], ['Sân 5B', '5v5'], ['Sân 7A', '7v7']];
    for (const [name, type] of pitches) {
      const [p] = await db.query(
        'INSERT INTO Pitches (venue_id, pitch_name, pitch_type, surface_type, status) VALUES (?, ?, ?, ?, ?)',
        [venueId, name, type, 'Artificial grass', 'available']
      );
      const pid = p.insertId;
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
    console.log('✅ Seeded sample venues/pitches/timeslots.');
  } catch (e) {
    console.error('❌ Seed sample data error:', e.message);
    throw e;
  }
}

// --- HÀM KHỞI ĐỘNG SERVER ---
async function startServer() {
  try {
    // Bước 1: Kiểm tra kết nối database
    const connection = await db.getConnection();
    connection.release();
    console.log('🚀 MySQL database connected successfully.');

    // Bước 2: Chạy các hàm khởi tạo THEO ĐÚNG THỨ TỰ
    await ensureSchema();
    await seedAdmin(); // Phải seed admin trước
    await seedSampleData(); // Mới seed data mẫu (vì cần admin user)

    // Bước 3: Nếu mọi thứ thành công, khởi động server
    app.listen(port, () => {
      console.log(`🔥 Server is running on http://localhost:${port}`);
    });
    
  } catch (error) {
    console.error('💥 CRITICAL: Failed to start server:', error.message);
    process.exit(1); // Thoát ứng dụng nếu có lỗi nghiêm trọng khi khởi động
  }
}

// Bắt đầu chạy server
startServer();