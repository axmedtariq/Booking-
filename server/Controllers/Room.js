import Room from "../models/Rooms.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async(req, res, next) => {
	const hotelId = req.params.hotelid;
	const newRoom = new Room(req.body);

	try{
		const saveRoom = await newRoom.save();
		try{
			await Hotel.findByIdAndUpdate(hotelId, {
				$push: { Rooms: saveRoom._id },
			});
		} catch (err) {
			next(err);
		}
		res.status(200).json(saveRoom)
	} catch(err) {
		next(err);
	}
}


export const UpdateRoom = async (req, res) => {
  try {
    const UpdatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(UpdatedRoom);
  } catch (err) {
    res.status(500).json(err);
  }
};



export const updateRoomAvailability = async (req, res, next) => {
  try {
    const roomId = req.params.id;
    const datesToAdd = req.body.dates;

    await Room.updateOne(
      { "RoomNumbers._id": roomId },
      {
        $addToSet: {
          "RoomNumbers.$.unavailableDates": { $each: datesToAdd }
        },
      }
    );

    res.status(200).json("Room status has been updated.");
  } catch (err) {
    next(err);
  }
};



export const deleteRoom = async (req, res) => {

	const hotelId = req.params.hotelid;
  try {
  	await Room.findByIdAndDelete(req.params.id);
  	try{
  		await Hotel.findByIdAndUpdate(hotelId, {
  			$pull: { Rooms: req.params.id },
  		});
  	}catch(err){
  		next(err);
  	}

  	res.status(200).json("Room has been deleted");
  } catch(err) {
  	next(err);
  }
}

export const getRoom = async (req, res) => {
  try {
    const Rooms = await Room.findById(req.params.id);
    res.status(200).json(Rooms);
  } catch (err) {
    res.status(500).json(err);
  }
};



export const getRooms = async(req, res) => {
	

	try{
		const Rooms = await Room.find()
		res.status(200).json(Rooms);
	}catch(err) {
		res.status(500).json(err);
	}

}