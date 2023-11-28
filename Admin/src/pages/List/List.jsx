import React from 'react';
import "./List.scss";
import Sidebar from '../../component/sidebar/sidebar'
import Navbar from '../../component/Navbar/navbar'
import Datatable from '../../component/DataTable/datatable'
const List = ({columns}) => {
	return(

		<div className="list">
		<Sidebar />
		<div className="listContainer">
		<Navbar />
		<Datatable columns={columns}/>
		</div>
		</div>


		);
}

export default List;