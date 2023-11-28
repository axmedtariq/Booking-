import User from "../models/user.js";



export const UpdateUser = async (req, res) => {
  try {
    const Updateduser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    const { IsAdmin, ...otherDetails } = UpdatedUser.toObject();

    res.status(200).json(otherDetails);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const DeleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const GetSingleUser = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};



export const GetAllUser = async(req, res) => {
	

	try{
		const users = await User.find()
		res.status(200).json(users);
	}catch(err) {
		res.status(500).json(err);
	}

}