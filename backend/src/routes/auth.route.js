import express from 'express';
import {login , signup, logout} from '../controllers/auth.route.controller.js';
// Importing express and defining the router
const router = express.Router();

router.get('/signup',signup)
router.get('/login', login)
router.get('/logout', logout)

export default router;