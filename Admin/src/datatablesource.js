
export const userColumns = [

{ field: "_id", headerName: "ID", width:70 },
{
	field: "user",
	headerName:"User",
	width:230,
	renderCell: (params) => {

		return (

			<div className="cellWithImg">
			<img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt=""/>
			{params.row.username}
			</div>


			);
	},
},

{
	field:"email",
	headerName:"Email",
	width:230,
},
{
	field:"country",
	headerName:"Country",
	width:100,
},
{
	field:"city",
	headerName:"City",
	width:100,
},
{
	field:"phone",
	headerName:"Phone",
	width:100,
}

];
///temporary data for testing datatable 
export const userRows = [


{
	id:1,
	username:"Yusuf",
	img:"https://mumsgrapevine.com.au/site/wp-content/uploads/2016/06/Snow-play-melbourne-FI.jpg",
	status:"Active",
	email:"1snow@gmail.com",
	age:35,
},

{
	id:2,
	username:"khadar",
	img:"https://www.centralwesterndaily.com.au/images/transform/v1/crop/frm/GHcbaSNijNeVS4SULWDX8n/7243b835-0a66-4ed1-8d8e-4c50a6f70b6a.jpg/r398_136_5113_3279_w5568_h3712_fmax.jpg",
	status:"passive",
	email:"2snow@gmail.com",
	age:42,
},

{
	id:3,
	username:"Abdilaahi",
	img:"https://www.hiiraan.com/2021/images/Sept/2021922637678995867898609.jpg",
	status:"Active",
	email:"3snow@gmail.com",
	age:20,
},

{
	id:4,
	username:"Siciid Jama",
	img:"https://saidjama.com/wp-content/uploads/2021/03/Slide55.png",
	status:"passive",
	email:"4snow@gmail.com",
	age:18,
},

{
	id:5,
	username:"Khadra",
	img:"https://goobjoog.com/wp-content/uploads/2017/07/recognized_Edna_Adan_Ismail__The_fighter_from__Somaliland.jpg",
	status:"Active",
	email:"5snow@gmail.com",
	age:13,
},

{
	id:6,
	username:"Ahmed",
	img:"https://mumsgrapevine.com.au/site/wp-content/uploads/2016/06/Snow-play-melbourne-FI.jpg",
	status:"passive",
	email:"6snow@gmail.com",
	age:38,
},

{
	id:7,
	username:"Yasin",
	img:"https://mumsgrapevine.com.au/site/wp-content/uploads/2016/06/Snow-play-melbourne-FI.jpg",
	status:"Active",
	email:"7snow@gmail.com",
	age:45,
},

{
	id:8,
	username:"Ifraax",
	img:"https://goobjoog.com/wp-content/uploads/2017/07/recognized_Edna_Adan_Ismail__The_fighter_from__Somaliland.jpg",
	status:"passive",
	email:"8snow@gmail.com",
	age:38,
},

{
	id:9,
	username:"Ibraahim",
	img:"https://mumsgrapevine.com.au/site/wp-content/uploads/2016/06/Snow-play-melbourne-FI.jpg",
	status:"Active",
	email:"9snow@gmail.com",
	age:34,
},




];


export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 300 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];


export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];