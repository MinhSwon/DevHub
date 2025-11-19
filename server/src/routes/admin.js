import { Router } from 'express';
import auth from '../middleware/auth.js';
import adminOnly from '../middleware/admin.js';
import {
  listUsersForAdmin,
  adminCreateEvent,
  adminListEvents,
  adminCreatePost,
  adminListPostsByCategory,
  adminListPitches,
  adminUpdatePitch,
  adminCreateTimeSlot,
} from '../controllers/adminController.js';

const router = Router();

// Các route chỉ dành cho admin
router.get('/users', auth, adminOnly, listUsersForAdmin);

// Sự kiện
router.post('/events', auth, adminOnly, adminCreateEvent);
router.get('/events', auth, adminOnly, adminListEvents);

// Tin tức & cộng đồng (dùng category: 'news' | 'community')
router.post('/posts', auth, adminOnly, adminCreatePost);
router.get('/posts/:category', auth, adminOnly, adminListPostsByCategory);

// Quản lý sân & khung giờ
router.get('/pitches', auth, adminOnly, adminListPitches);
router.put('/pitches/:id', auth, adminOnly, adminUpdatePitch);
router.post('/pitches/:pitchId/timeslots', auth, adminOnly, adminCreateTimeSlot);

export default router;



