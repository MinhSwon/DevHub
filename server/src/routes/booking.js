import { Router } from 'express';
import { listPitches, getAvailability, createBooking, cancelBooking } from '../controllers/bookingController.js';
import auth from '../middleware/auth.js';

const router = Router();

router.get('/pitches', listPitches);
router.get('/availability/:pitchId', getAvailability);
router.post('/bookings', auth, createBooking);
router.delete('/bookings/:id', auth, cancelBooking);

export default router;


