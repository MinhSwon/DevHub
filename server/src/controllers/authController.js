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
    const usersByEmail = await db.query('SELECT email FROM users WHERE email = $1', [email]);
    if (usersByEmail.rows.length > 0) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user to database (users schema)
    const result = await db.query(
      'INSERT INTO users (full_name, password_hash, email, role, status) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [name, hashedPassword, email, 'student', 'pending_verification']
    );
    const userId = result.rows[0].id;

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
      const users = await db.query('SELECT * FROM users WHERE email = $1', [email]);
      if (users.rows.length === 0) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
      
      const user = users.rows[0];

      // Check password
      const isMatch = await bcrypt.compare(password, user.password_hash);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
  
      // Create and sign JWT
      const payload = { user: { id: user.id } };
  
      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({ token, user: { id: user.id, name: user.full_name, email: user.email, role: user.role, status: user.status } });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
