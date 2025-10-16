import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import db from '../config/db.js';

// @desc    Register a user
export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, phone, email, password } = req.body;

  try {
    // Check if user already exists
    const [usersByEmail] = await db.query('SELECT email FROM Users WHERE email = ?', [email]);
    if (usersByEmail.length > 0) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    if (phone) {
      const [usersByPhone] = await db.query('SELECT phone_number FROM Users WHERE phone_number = ?', [phone]);
      if (usersByPhone.length > 0) {
        return res.status(400).json({ msg: 'Phone already in use' });
      }
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user to database (Users schema)
    const [result] = await db.query(
      'INSERT INTO Users (full_name, phone_number, password_hash, email, role) VALUES (?, ?, ?, ?, ?)',
      [name, phone || '', hashedPassword, email, 'customer']
    );
    const userId = result.insertId;

    // Create and sign JWT
    const payload = { user: { id: userId } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token, user: { id: userId, name, email, phone, role: 'customer' } });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Auth user & get token
export const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { email, password } = req.body;
  
    try {
      // Check for user
      const [users] = await db.query('SELECT * FROM Users WHERE email = ?', [email]);
      if (users.length === 0) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
      
      const user = users[0];

      // Check password
      const isMatch = await bcrypt.compare(password, user.password_hash);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
  
      // Create and sign JWT
      const payload = { user: { id: user.user_id } };
  
      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({ token, user: { id: user.user_id, name: user.full_name, email: user.email, phone: user.phone_number, role: user.role } });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
