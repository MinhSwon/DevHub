# Hướng dẫn Setup PostgreSQL và pgAdmin cho UMT Sports Hub

## 1. Cài đặt PostgreSQL

### Windows:
1. Tải PostgreSQL từ: https://www.postgresql.org/download/windows/
2. Chạy installer và làm theo hướng dẫn
3. Ghi nhớ mật khẩu cho user `postgres` (superuser)
4. Đảm bảo PostgreSQL service đang chạy

### macOS:
```bash
# Sử dụng Homebrew
brew install postgresql
brew services start postgresql
```

### Ubuntu/Debian:
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

## 2. Cài đặt pgAdmin

### Windows:
1. Tải pgAdmin từ: https://www.pgadmin.org/download/
2. Cài đặt và khởi động pgAdmin
3. Tạo master password khi lần đầu chạy

### macOS:
```bash
brew install --cask pgadmin4
```

### Ubuntu/Debian:
```bash
sudo apt install pgadmin4
```

## 3. Tạo Database và User

### Cách 1: Sử dụng pgAdmin (GUI)
1. Mở pgAdmin
2. Kết nối đến PostgreSQL server (localhost:5432)
3. Right-click "Databases" → "Create" → "Database"
4. Tên database: `umt_sport_hub`
5. Click "Save"

### Cách 2: Sử dụng Command Line
```bash
# Kết nối đến PostgreSQL
psql -U postgres

# Tạo database
CREATE DATABASE umt_sport_hub;

# Tạo user (tùy chọn)
CREATE USER umt_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE umt_sport_hub TO umt_user;

# Thoát
\q
```

## 4. Cấu hình Environment Variables

1. Copy file `server/env.example` thành `.env`:
```bash
cd server
cp env.example .env
```

2. Chỉnh sửa file `.env` với thông tin database của bạn:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_postgres_password
DB_NAME=umt_sport_hub
JWT_SECRET=your_jwt_secret_here
PORT=5000
NODE_ENV=development
```

## 5. Chạy Database Schema

### Cách 1: Sử dụng pgAdmin
1. Mở pgAdmin
2. Kết nối đến database `umt_sport_hub`
3. Right-click database → "Query Tool"
4. Copy nội dung file `server/src/database.sql`
5. Paste vào Query Tool và chạy (F5)

### Cách 2: Sử dụng Command Line
```bash
# Kết nối và chạy script
psql -U postgres -d umt_sport_hub -f server/src/database.sql
```

## 6. Cài đặt Dependencies

```bash
cd server
npm install
```

## 7. Chạy Server

```bash
# Development mode
npm run dev

# Production mode
npm run build
npm start
```

## 8. Kiểm tra Kết nối

Server sẽ tự động kết nối đến PostgreSQL khi khởi động. Nếu có lỗi, kiểm tra:

1. PostgreSQL service đang chạy
2. Thông tin trong file `.env` chính xác
3. Database `umt_sport_hub` đã được tạo
4. User có quyền truy cập database

## 9. Troubleshooting

### Lỗi kết nối:
- Kiểm tra PostgreSQL service: `sudo systemctl status postgresql` (Linux) hoặc Services (Windows)
- Kiểm tra port 5432 có bị block không
- Kiểm tra firewall settings

### Lỗi authentication:
- Kiểm tra username/password trong `.env`
- Kiểm tra pg_hba.conf file nếu cần

### Lỗi database không tồn tại:
- Tạo database trước khi chạy schema
- Kiểm tra tên database trong `.env`

## 10. pgAdmin Tips

1. **Kết nối lần đầu**: Sử dụng user `postgres` và password bạn đã set khi cài đặt
2. **Tạo connection**: Right-click "Servers" → "Create" → "Server"
3. **Xem tables**: Mở rộng database → Schemas → public → Tables
4. **Chạy queries**: Right-click database → "Query Tool"
5. **Backup/Restore**: Right-click database → "Backup" hoặc "Restore"

## 11. Performance Tips

1. **Connection Pooling**: Đã được cấu hình trong `db.js`
2. **Indexes**: Có thể thêm indexes cho các cột thường query
3. **Monitoring**: Sử dụng pgAdmin để monitor performance

Chúc bạn setup thành công! 🚀
