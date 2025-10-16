-- This script is designed for MySQL.

-- Create the database if it doesn't already exist.
CREATE DATABASE IF NOT EXISTS umt_sport_hub CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Switch to the newly created database.
USE umt_sport_hub;

-- Table: Users
-- Stores user account information, including roles for access control.
CREATE TABLE IF NOT EXISTS Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE,
    role ENUM('customer', 'owner', 'admin') NOT NULL DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: Venues
-- Stores information about a sports complex or location.
CREATE TABLE IF NOT EXISTS Venues (
    venue_id INT PRIMARY KEY AUTO_INCREMENT,
    owner_id INT NOT NULL,
    venue_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    district VARCHAR(100),
    description TEXT,
    contact_phone VARCHAR(15),
    opening_time TIME,
    closing_time TIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (owner_id) REFERENCES Users(user_id) ON DELETE RESTRICT
);

-- Table: Pitches
-- Stores details for each individual pitch within a venue.
CREATE TABLE IF NOT EXISTS Pitches (
    pitch_id INT PRIMARY KEY AUTO_INCREMENT,
    venue_id INT NOT NULL,
    pitch_name VARCHAR(100) NOT NULL,
    pitch_type ENUM('5v5', '7v7', '11v11') NOT NULL,
    surface_type VARCHAR(50) DEFAULT 'Artificial grass',
    image_url VARCHAR(255),
    status ENUM('available', 'maintenance') NOT NULL DEFAULT 'available',
    FOREIGN KEY (venue_id) REFERENCES Venues(venue_id) ON DELETE CASCADE
);

-- Table: TimeSlots
-- Defines pricing for different time slots (e.g., weekday vs. weekend).
CREATE TABLE IF NOT EXISTS TimeSlots (
    timeslot_id INT PRIMARY KEY AUTO_INCREMENT,
    pitch_id INT NOT NULL,
    day_of_week ENUM('weekday', 'weekend') NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    UNIQUE KEY (pitch_id, day_of_week, start_time, end_time),
    FOREIGN KEY (pitch_id) REFERENCES Pitches(pitch_id) ON DELETE CASCADE
);

-- Table: Bookings
-- The core table that records all booking transactions.
CREATE TABLE IF NOT EXISTS Bookings (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    pitch_id INT NOT NULL,
    booking_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'confirmed', 'cancelled', 'completed') NOT NULL DEFAULT 'pending',
    booking_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    notes TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (pitch_id) REFERENCES Pitches(pitch_id) ON DELETE CASCADE
);

-- Table: Payments
-- Tracks payment status for each booking.
CREATE TABLE IF NOT EXISTS Payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    booking_id INT NOT NULL UNIQUE,
    payment_method VARCHAR(50),
    amount DECIMAL(10, 2) NOT NULL,
    payment_status ENUM('pending', 'paid', 'failed', 'refunded') NOT NULL DEFAULT 'pending',
    transaction_code VARCHAR(255),
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES Bookings(booking_id) ON DELETE CASCADE
);

-- Table: Reviews
-- Allows users to rate and comment on venues.
CREATE TABLE IF NOT EXISTS Reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    venue_id INT NOT NULL,
    rating TINYINT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (venue_id) REFERENCES Venues(venue_id) ON DELETE CASCADE
);
