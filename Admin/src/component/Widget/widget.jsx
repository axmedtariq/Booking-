import './widget.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Widget = ({type}) => {

	let data;

	//Temporary
	const amount = 100;
	const diff = 20;

	switch (type) {
		case "user":

		data = {

			title: "USERS",
			isMoney: false,
			lik: "see all users",
			icon: <PersonOutlineIcon  className="icon" style={{color:"crimson", backgroundColor: "rgba(255, 0, 0, 0.25)"}} />,
		}
		break;
		case "order":

		data = {

			title: "ORDERS",
			isMoney: true,
			lik: "see all orders",
			icon: <ShoppingCartOutlinedIcon className="icon" style={{backgroundColor: "rgba(218, 165, 32, 0.32)", color:"goldenrod"}} />,
		}
		break;
		case "earning":

		data = {

			title: "EARNINGS",
			isMoney: true,
			lik: "view net earnings",
			icon: <MonetizationOnIcon className="icon" style={{backgroundColor: "rgba(0, 128, 0, 0.2)", color:"green",}}/>,
		}
		break;
		case "balance":

		data = {

			title: "BALANCE",
			isMoney: true,
			lik: "see all details",
			icon: <AccountBalanceWalletIcon className="icon" style={{backgroundColor: "rgba(128, 0, 128, 0.2)", color:"purple"}} />,
		}
		break;
		default:
		break;
	}
	return (

		<div className="widget">
		<div className="left">

		<span className="title">{data?.title}</span>
		<span className="counter">{data?.isMoney && "$"} {amount}</span>
		<span className="link">{data?.link}</span>

		</div>
		<div className="right">
		<div className="percentage positive">
		<KeyboardArrowDownIcon />

		{diff}%
		</div>

		{data?.icon}
		
		</div>
		</div>


		);
}

export default Widget;