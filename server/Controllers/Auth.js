import User from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


// Register User JWT Verification 
export const register = async(req, res) => {

	try{

		const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

		const newUser = new User({
			...req.body,
			password: hash,
		})

		await newUser.save();
		res.status(200).send("user has been created");



	}catch(err){
		console.log(err);
	}
}

// Login User Using JWT verification 

export const Login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) return res.status(400).json({ error: "Wrong password" });

    const token = jwt.sign({ id: user._id, IsAdmin: user.IsAdmin }, process.env.JWT_SECRET);

    // Exclude sensitive fields from the response
    const { password, IsAdmin, ...otherDetails } = user.toObject();
    
    res.cookie("access_token", token, {
      httpOnly: true,
    });

    res.status(200).json({ details:{...otherDetails}, IsAdmin });
  } catch (err) {
    console.log(err);
    // Handle errors appropriately, e.g., return an error response.
    res.status(500).json({ error: "Internal server error" });
  }
};
