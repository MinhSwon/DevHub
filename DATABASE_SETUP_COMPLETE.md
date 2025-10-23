# 🎉 Hướng dẫn hoàn thiện kết nối Database PostgreSQL

## ✅ Đã hoàn thành:

1. **Cấu hình Database**: Đã cập nhật thông tin database của bạn
2. **Connection Pool**: Tối ưu cho kết nối remote (172.16.2.2:54344)
3. **Test Scripts**: Tạo scripts để test và setup database
4. **Sample Data**: Chuẩn bị dữ liệu mẫu

## 🚀 Các bước thực hiện:

### 1. Cài đặt Dependencies
```bash
cd server
npm install
```

### 2. Test kết nối Database
```bash
npm run test-db
```

**Kết quả mong đợi:**
```
🔄 Testing database connection...
Host: 172.16.2.2
Port: 54344
Database: adminadmin
User: postgres
✅ Database connection successful!
📊 Database info:
   Current time: 2024-01-XX XX:XX:XX
   PostgreSQL version: PostgreSQL XX.X
   Connected to database: adminadmin
```

### 3. Setup Database Schema
```bash
npm run setup-db
```

**Kết quả mong đợi:**
```
🚀 Setting up database schema...
✅ Connected to database successfully!
📋 Executing database schema...
✅ Executed: CREATE TABLE IF NOT EXISTS Users...
✅ Executed: CREATE TABLE IF NOT EXISTS Venues...
...
📋 Database tables created:
   ✅ Users
   ✅ Venues
   ✅ Pitches
   ✅ TimeSlots
   ✅ Bookings
   ✅ Payments
   ✅ Reviews
🌱 Inserting sample data...
✅ Sample users inserted
✅ Sample venue inserted
✅ Sample pitches inserted
✅ Sample time slots inserted
🎉 Database setup completed successfully!
```

### 4. Chạy Server
```bash
npm run dev
```

## 🔧 Troubleshooting

### Lỗi kết nối:
```bash
❌ Database connection failed:
Error: connect ECONNREFUSED 172.16.2.2:54344
```

**Giải pháp:**
- Kiểm tra PostgreSQL server có đang chạy không
- Kiểm tra firewall có block port 54344 không
- Kiểm tra network connectivity đến 172.16.2.2

### Lỗi authentication:
```bash
❌ Database connection failed:
Error: password authentication failed for user "postgres"
```

**Giải pháp:**
- Kiểm tra password trong file `.env`
- Đảm bảo user `postgres` có quyền truy cập database `adminadmin`

### Lỗi database không tồn tại:
```bash
❌ Database connection failed:
Error: database "adminadmin" does not exist
```

**Giải pháp:**
- Tạo database `adminadmin` trước:
```sql
CREATE DATABASE adminadmin;
```

## 📊 Cấu trúc Database sau khi setup:

### Tables được tạo:
- **Users**: Thông tin người dùng (admin, customer, owner)
- **Venues**: Thông tin sân thể thao
- **Pitches**: Thông tin sân con trong venue
- **TimeSlots**: Giá theo khung giờ (weekday/weekend)
- **Bookings**: Đặt sân
- **Payments**: Thanh toán
- **Reviews**: Đánh giá

### Sample Data:
- **3 Users**: Admin, Customer, Owner
- **1 Venue**: UMT Sports Complex
- **3 Pitches**: 5v5, 7v7, 11v11
- **8 TimeSlots**: Giá khác nhau cho weekday/weekend

## 🎯 API Endpoints có sẵn:

### Authentication:
- `POST /api/auth/register` - Đăng ký
- `POST /api/auth/login` - Đăng nhập

### Booking:
- `GET /api/booking/pitches` - Danh sách sân
- `GET /api/booking/availability/:pitchId` - Kiểm tra lịch trống
- `POST /api/booking` - Đặt sân
- `PUT /api/booking/:id/cancel` - Hủy đặt sân

## 🔍 Kiểm tra hoạt động:

1. **Test API**: Sử dụng Postman hoặc curl
2. **Check Database**: Sử dụng pgAdmin để xem dữ liệu
3. **Monitor Logs**: Xem logs server để debug

## 🎉 Kết quả cuối cùng:

Sau khi hoàn thành, bạn sẽ có:
- ✅ Database PostgreSQL hoạt động
- ✅ Schema và sample data
- ✅ API server sẵn sàng
- ✅ Kết nối ổn định với remote database

**Chúc bạn thành công! 🚀**
