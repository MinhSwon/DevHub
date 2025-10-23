# 🔧 Troubleshooting Database Connection

## ❌ Vấn đề hiện tại:
Không thể kết nối đến database server `172.16.2.2:54344`

## 🔍 Các bước kiểm tra:

### 1. Kiểm tra thông tin database
```bash
# Xem thông tin trong file .env
cat .env
```

**Kết quả hiện tại:**
```
DB_HOST=172.16.2.2
DB_PORT=54344
DB_USER=postgres
DB_PASSWORD=123456
DB_NAME=adminadmin
```

### 2. Kiểm tra network connectivity
```bash
# Test ping đến server
ping 172.16.2.2

# Test port connectivity
telnet 172.16.2.2 54344
```

### 3. Kiểm tra PostgreSQL server

#### Nếu server là local:
```bash
# Kiểm tra PostgreSQL service
# Windows:
sc query postgresql

# Linux/macOS:
sudo systemctl status postgresql
```

#### Nếu server là remote:
- Kiểm tra server có đang chạy không
- Kiểm tra firewall settings
- Kiểm tra PostgreSQL configuration

### 4. Các giải pháp có thể:

#### Giải pháp 1: Sử dụng local PostgreSQL
```bash
# Cài đặt PostgreSQL local
# Windows: Download từ postgresql.org
# macOS: brew install postgresql
# Ubuntu: sudo apt install postgresql

# Tạo database
createdb adminadmin

# Cập nhật .env
DB_HOST=localhost
DB_PORT=5432
```

#### Giải pháp 2: Kiểm tra thông tin server
- Xác nhận IP address: `172.16.2.2`
- Xác nhận port: `54344` (khác với port mặc định 5432)
- Xác nhận database name: `adminadmin`
- Xác nhận username/password

#### Giải pháp 3: Sử dụng pgAdmin để test
1. Mở pgAdmin
2. Tạo connection mới với thông tin:
   - Host: 172.16.2.2
   - Port: 54344
   - Database: adminadmin
   - Username: postgres
   - Password: 123456
3. Test connection trong pgAdmin

### 5. Cấu hình thay thế:

#### Nếu sử dụng local PostgreSQL:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_local_password
DB_NAME=umt_sport_hub
```

#### Nếu sử dụng Docker:
```bash
# Chạy PostgreSQL trong Docker
docker run --name postgres-umt \
  -e POSTGRES_PASSWORD=123456 \
  -e POSTGRES_DB=adminadmin \
  -p 5432:5432 \
  -d postgres:13
```

### 6. Test kết nối từ command line:

```bash
# Sử dụng psql để test
psql -h 172.16.2.2 -p 54344 -U postgres -d adminadmin

# Hoặc với local PostgreSQL
psql -h localhost -p 5432 -U postgres -d adminadmin
```

## 🎯 Khuyến nghị:

1. **Kiểm tra server**: Đảm bảo PostgreSQL server đang chạy trên 172.16.2.2:54344
2. **Kiểm tra network**: Test ping và telnet đến server
3. **Kiểm tra credentials**: Xác nhận username/password đúng
4. **Kiểm tra database**: Đảm bảo database `adminadmin` đã được tạo
5. **Thử local**: Nếu có thể, setup PostgreSQL local để test

## 📞 Cần hỗ trợ thêm:

Nếu vẫn không kết nối được, hãy cung cấp thêm thông tin:
- Server 172.16.2.2 có phải là server của bạn không?
- PostgreSQL có đang chạy trên server đó không?
- Có thể truy cập server đó từ máy khác không?
- Có thể sử dụng local PostgreSQL thay thế không?
