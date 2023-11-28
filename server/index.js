import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import AuthRoute from './routes/Auth.js'
import usersRoute from './routes/users.js'
import HotelRoute from './routes/Hotel.js'
import RoomsRoute from './routes/Room.js'
import cookieParser from 'cookie-parser'
import cors from "cors";


const app = express();
dotenv.config();

// Mongodb Connection Using Environment Variables
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONN, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    throw error;
  }
};

// Middlewares 
app.use(cors({ origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", AuthRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", HotelRoute);
app.use("/api/room", RoomsRoute);




app.listen(8000, () => {
  connect();
  console.log("Connected to Backend");
});
