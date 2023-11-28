import express from 'express';
const router = express.Router();
import User from "../models/user.js";
import { UpdateUser, DeleteUser, GetSingleUser, GetAllUser } from "../Controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../Utills/VerifyToken.js";



// UPDATE USER

router.put("/:id", verifyUser, UpdateUser);

// DELETE USER

router.delete("/:id", verifyUser, DeleteUser);

// GET USER

router.get("/:id", verifyUser, GetSingleUser);

// GET All USERS 
router.get("/",  GetAllUser);



export default router;