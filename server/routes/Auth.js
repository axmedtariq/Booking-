import express from 'express';
const router = express.Router();
import { register, Login } from "../Controllers/Auth.js";
router.post("/register", register);
router.post("/login", Login);

export default router;