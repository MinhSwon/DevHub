-- This script is designed for PostgreSQL.

-- Create the database if it doesn't already exist.
-- Note: You need to run this as a superuser (postgres) or with appropriate privileges
-- CREATE DATABASE umt_sport_hub WITH ENCODING 'UTF8' LC_COLLATE='en_US.UTF-8' LC_CTYPE='en_US.UTF-8';

-- Connect to the database (this should be done in your application or pgAdmin)
-- \c umt_sport_hub;

-- Table: Users
-- Stores user account information, including roles for access control.
CREATE TABLE IF NOT EXISTS Users (
    user_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE,
    role VARCHAR(20) NOT NULL DEFAULT 'customer' CHECK (role IN ('customer', 'owner', 'admin')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: Venues
-- Stores information about a sports complex or location.
CREATE TABLE IF NOT EXISTS Venues (
    venue_id SERIAL PRIMARY KEY,
    owner_id INTEGER NOT NULL,
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
    pitch_id SERIAL PRIMARY KEY,
    venue_id INTEGER NOT NULL,
    pitch_name VARCHAR(100) NOT NULL,
    pitch_type VARCHAR(10) NOT NULL CHECK (pitch_type IN ('5v5', '7v7', '11v11')),
    surface_type VARCHAR(50) DEFAULT 'Artificial grass',
    image_url VARCHAR(255),
    status VARCHAR(20) NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'maintenance')),
    FOREIGN KEY (venue_id) REFERENCES Venues(venue_id) ON DELETE CASCADE
);

-- Table: TimeSlots
-- Defines pricing for different time slots (e.g., weekday vs. weekend).
CREATE TABLE IF NOT EXISTS TimeSlots (
    timeslot_id SERIAL PRIMARY KEY,
    pitch_id INTEGER NOT NULL,
    day_of_week VARCHAR(10) NOT NULL CHECK (day_of_week IN ('weekday', 'weekend')),
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    UNIQUE (pitch_id, day_of_week, start_time, end_time),
    FOREIGN KEY (pitch_id) REFERENCES Pitches(pitch_id) ON DELETE CASCADE
);

-- Table: Bookings
-- The core table that records all booking transactions.
CREATE TABLE IF NOT EXISTS Bookings (
    booking_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    pitch_id INTEGER NOT NULL,
    booking_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
    booking_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    notes TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (pitch_id) REFERENCES Pitches(pitch_id) ON DELETE CASCADE
);

-- Table: Payments
-- Tracks payment status for each booking.
CREATE TABLE IF NOT EXISTS Payments (
    payment_id SERIAL PRIMARY KEY,
    booking_id INTEGER NOT NULL UNIQUE,
    payment_method VARCHAR(50),
    amount DECIMAL(10, 2) NOT NULL,
    payment_status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
    transaction_code VARCHAR(255),
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES Bookings(booking_id) ON DELETE CASCADE
);

-- Table: Reviews
-- Allows users to rate and comment on venues.
CREATE TABLE IF NOT EXISTS Reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    venue_id INTEGER NOT NULL,
    rating SMALLINT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (venue_id) REFERENCES Venues(venue_id) ON DELETE CASCADE
);
