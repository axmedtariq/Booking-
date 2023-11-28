
import "./newHotel.scss";
import Sidebar from "../../component/sidebar/sidebar";
import Navbar from "../../component/Navbar/navbar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';
import { hotelInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewHotel = ({inputs, title}) => {
	const [files, setFiles] = useState("");
	const [info, setInfo] = useState({});
	const [rooms, setRooms] = useState();
	const { data, loading, error } = useFetch("http://localhost:8000/api/room")

  // Update formInputs when inputs prop changes
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {

  	const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
  	setRooms(selectedOptions);

  };

  const handleClick = async (e) => {
  e.preventDefault();
  try {
    const list = await Promise.all(
      Object.values(files).map(async (file) => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/tariq23/image/upload", data);
        const { url } = uploadRes.data;
        return url;
      })
    );

    const newhotel = {
      ...info,
      rooms,
      photos: list,
    };

    // Assuming the URL is correct, you're trying to make a POST request to your local server
    await axios.post("http://localhost:8000/api/hotels", newhotel);
    
    // Log a success message if the request was successful
    console.log("Hotel data successfully posted.");

  } catch (err) {
    // Handle and log any errors that occur during the process
    console.error("Error:", err);
  }
};



	console.log(rooms)
	return (

		<div className="New" >
			<Sidebar />
			<div className="newContainer">
			<Navbar />
			<div className="top">
			<h1>Add New Product</h1></div>
	
			<div className="bottom">
			<div className="left">
				<img src={files ? URL.createObjectURL(files[0]) : "http://cdn.onlinewebfonts.com/svg/img_211436.png"} alt=""/>
			</div>
			<div className="right">
				<form>
				<div className="forminput">
				<label htmlFor="file">image:<DriveFolderUploadIcon className="icon" /></label>
				<input type="file" id="file" multiple  onChange={e=>setFiles(e.target.files)} style={{ display: "none"}} />
				</div>
				{hotelInputs.map((input) => (

				<div className="forminput" key={input.id}>
				<label>{input.label}</label>
				<input id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder} />
				</div>

				))}
				<div className="forminput">
				<label>Featured</label>
				<select id="featured" onChange={handleChange}>
				<option value={false}>No</option>
				<option value={true}>Yes</option>
				</select>
				</div>
				<div className="selectRoom">
				<label>Rooms</label>
				<select id="rooms" multiple onChange={handleSelect}>
				{loading ? "loading" : data && data.map(room=>(
					<option key={room._id} value={room._id}>{room.title}</option>
					))}
				</select>
				</div>
				
				<button onClick={handleClick}>Send</button>



				</form>
			</div>
		</div>
		</div>
		</div>


		);
}



export default NewHotel;