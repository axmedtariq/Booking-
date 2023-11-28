import './datatable.scss';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable = ({columns}) =>{
  
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();
  const { data, loading, error } = useFetch(`/${path}`);

    useEffect(() => {
    setList(data);
  }, [data]);


  const handleDelete = async (id) => {

    try{

      await axios.delete(`/${path}/${id}`);
    }catch (err){
      setList(list.filter((item) => item.id !== id));
    };
  };

  const actionColumn = [

  {
    field:"action",
    headerName:"Action",
    width:200,
    renderCell: (params) => {
      return (
        <div className="CellAction">
        <Link to="/users/test" style={{ textDecoration:"none" }}>
        <div className="viewButton">View</div>
        </Link>
        <div onClick={() => handleDelete(params.row._id)} className="deleteButton">Delete</div>
        </div>
        

        )
    }
  }
  ]
	return(
    <div className="datatable">
     <div className="datatableTitle">

        Add New {path}
        <Link to={`/${path}/new`} style={{ textDecoration:"none" }} className="link">
        Add New
        </Link>
        </div>


		 <DataGrid className="datagrid"
        rows={list || []}
        columns={columns.concat(actionColumn)}
        pageSize={11}
        rowsPerPageOptions={[11]}
        checkboxSelection
        getRowId={(row) => row._id}/>
			


		</div>



		);
}
export default Datatable;