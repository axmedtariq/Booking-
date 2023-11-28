import React, { useState, useContext } from 'react'; // Import React and its hooks
import axios from 'axios'; // Import axios for HTTP requests
import { useNavigate } from 'react-router-dom'; // Import 'navigate' from your routing library


import './Login.scss';
 import { AuthContext } from "../../context/AuthContext";

const Login = () => {
	const [credentials, setCredential] = useState({
		username: undefined,
		password: undefined,
	});

	const {  loading, error, dispatch } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};


const handleClick = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		console.log("button click")

		try{
			const res = await axios.post("/auth/Login", credentials);
			dispatch({ type: "LOGIN_SUCCESS",  payload: res.data.details });
			if (res.data.IsAdmin) {

			    dispatch({ type: "LOGIN_SUCCESS",  payload: res.data });
			navigate("/");
		} else {
			dispatch({ type:"LOGIN_FAILURE", payload: { message: "You are not allowed"}})
		}
		}catch (err) {
			dispatch({ type:"LOGIN_FAILURE", payload: err.response.data });
		}
	};


	//console.log(user);
 	return (
		<div className="Login">
		<div className="lContainer">
		<input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
		<input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput"/>
		<button disabled={loading} onClick={handleClick} className="lButton">Login</button>
		{error && <span>{error.message}</span>}
		</div>
		</div>
	);
}

export default Login;