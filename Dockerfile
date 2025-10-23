# Sử dụng Node.js làm base image
FROM node:18

# Tạo thư mục làm việc trong container
WORKDIR /app

# Sao chép file app.js vào container
COPY app.js .

# Lệnh chạy khi container khởi động
CMD ["node", "app.js"]