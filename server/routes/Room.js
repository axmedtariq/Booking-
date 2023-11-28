import express from 'express';
const router = express.Router();
import Room from "../models/Rooms.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from '../Utills/VerifyToken.js';
import { createRoom, UpdateRoom, 
updateRoomAvailability, 
deleteRoom,
getRoom, 
getRooms } from '../Controllers/Room.js';



// POST
router.post("/", verifyAdmin, createRoom) 

// UPDATE 

router.post("/:hotelid", verifyAdmin, createRoom) 

router.put("/:hotelid",verifyAdmin, UpdateRoom);
router.put("/availability/:id", updateRoomAvailability);



// DELETE

router.delete("/:id/:hotelid",verifyAdmin, deleteRoom);

// GET Single Room

router.get("/:hotelId", verifyAdmin, getRoom);

// GET All Rooms 
router.get("/", getRooms );


export default router;