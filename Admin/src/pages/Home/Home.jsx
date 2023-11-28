import React from 'react';
import "./Home.scss";
import Sidebar from "../../component/sidebar/sidebar"
import Navbar from "../../component/Navbar/navbar"
import Widget from "../../component/Widget/widget"
import Featured from "../../component/Feature/feature"
import Chart from '../../component/Chart/chart'
import Table from '../../component/Table/Table'
const Home = () => {
	return(
    
    <div className="Home">
		<Sidebar />
		<div className="HomeContainer">
		<Navbar />
		<div className="widgets">
		<Widget type="user" />
		<Widget type="order" />
		<Widget type="earning" />
		<Widget type="balance" />
		</div>
		<div className="charts">
		<Featured />
		<Chart />
		</div>
		<div className="listContainer">
		<div className="listTitle">Latest Transections</div>
		<Table />
		</div>

		</div>
		</div>
		


		);
}

export default Home;