import express from 'express';
const router = express.Router();
import Hotel from "../models/Hotel.js";
import { CreateHotel, 
UpdateHotel, 
DeleteHotel,
GetSingleHotel,
GetAllHotel,
CountHotelsByCity,
countByType,
getHotelRooms } from "../Controllers/hotel.js";
import { verifyAdmin } from "../Utills/VerifyToken.js";


// CREATE

router.post("/", CreateHotel ) // adding verifyadmin

// UPDATE 

router.put("/:id",verifyAdmin, UpdateHotel);


// DELETE

router.delete("/:id",verifyAdmin, DeleteHotel);

// GET Single Hotel

router.get("/find/:id", GetSingleHotel);

// GET All Hotels 
router.get("/", GetAllHotel);  // adding verifyadmin

// Get Hotel By city Name
router.get("/CountHotelsByCity", CountHotelsByCity);

// Get Hotel By it's Type
router.get("/CountByType", countByType);
router.get("/room/:id", getHotelRooms)


export default router;