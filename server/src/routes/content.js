import { Router } from 'express';
import { adminListEvents, adminListPostsByCategory } from '../controllers/adminController.js';

const router = Router();

// Các API public để user xem sự kiện / tin tức / cộng đồng
router.get('/events', (req, res) => adminListEvents(req, res));
router.get('/posts/:category', (req, res) => adminListPostsByCategory(req, res));

export default router;


