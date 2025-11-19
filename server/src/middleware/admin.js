import db from '../config/db.js';

// Middleware kiểm tra quyền admin cho các route quản trị
export default async function adminOnly(req, res, next) {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const result = await db.query('SELECT role FROM users WHERE id = $1', [userId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (result.rows[0].role !== 'admin') {
      return res.status(403).json({ error: 'Admin role required' });
    }

    next();
  } catch (err) {
    console.error('adminOnly middleware error:', err);
    res.status(500).json({ error: 'Server error' });
  }
}


