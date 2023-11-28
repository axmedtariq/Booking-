import React from "react";
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import { DarkModecontext } from "../../context/darkModecontext";
import { useContext } from "react";


const Navbar = () => {
	const { dispatch } = useContext(DarkModecontext);
	return(

		<div className="navbar">
		<div className="wrapper">
		<div className="search">
		<input type="text" placeholder="Search.."/>
		<SearchOutlinedIcon />
		</div>
		<div className='items'>
		<div className="item">
		<LanguageIcon className="icon"/>
		English
		

		</div>
		<div className="item">
		<DarkModeOutlinedIcon className="icon" onClick={() =>dispatch({type:"TOGGLE"})} />

		</div>
		<div className="item">
		<FullscreenExitIcon className="icon" />
		

		</div>
		<div className="item">
		<NotificationsNoneOutlinedIcon className="icon" />
		<div className="counter">1</div>


		</div>
		<div className="item">
		<ChatBubbleOutlineIcon className="icon" />
		<div className="counter">2</div>
		

		</div>
		<div className="item">
		<ListIcon className="icon" />
		</div>
		<div className="item">
		<div>
		<img src="https://media.gettyimages.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?s=612x612" alt="" className="avator" />
		</div>

		</div>
		</div>
		</div>
		</div>




		);
}
export default Navbar;