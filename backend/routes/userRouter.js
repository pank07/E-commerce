import express from 'express';
import { registerUser } from '../controllers/userController.js'; // Ensure this is a function

const router = express.Router();

// Ensure registerUser is a function
router.post('/register', registerUser);

export default router;
