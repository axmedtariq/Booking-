import React from 'react';
import "./single.scss";
import Sidebar from "../../component/sidebar/sidebar"
import Navbar from "../../component/Navbar/navbar"
import Chart from "../../component/Chart/chart"
import List from "../../component/Table/Table"
const single = () => {
	return(

		<div className="Single">

		<Sidebar />
		<div className="singleContainer">
		<Navbar />
		<div className="top">
		<div className="left">
		<div className="editButton">Edit</div>
		<h1 className="title">Information</h1>

		<div className="item">
			<img src="https://travelcarecode.org/wp-content/uploads/2017/03/1-Learn-AdobeStock_86610883-edit.jpeg" alt="" className="itemImg" />
			<div className="details">
			<h1 className="itemTitle">Tariq Abdi</h1>
			<div className="detailItem">
			<span className="itemKey">Email :</span>
			<span className="itemValue">Tariq@gmail.com</span>
		</div>
			<div className="detailItem">
			<span className="itemKey">Phone :</span>
			<span className="itemValue">+252634865263</span>
		</div>
			<div className="detailItem">
			<span className="itemKey">Address :</span>
			<span className="itemValue">Gacan Libah, Hargeisa</span>
		</div>
			<div className="detailItem">
			<span className="itemKey">Country :</span>
			<span className="itemValue">SOMALILAND</span>
		</div>
		</div>
		<div className="right"></div>
		<Chart />
		</div>
		<div className="bottom">
		<div className="title">Last Transections</div>
			<List />
		</div>


		</div>

		 </div>
		 </div>
		 </div>



		);
}

export default single;

