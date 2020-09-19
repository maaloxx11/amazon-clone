import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
	return (
		<nav className="header">
			<Link to="/">
				<img
					className="header_logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
				></img>
			</Link>
			<div className="header_search">
				<input type="text" className="header_searchinput"></input>
				<SearchIcon className="header_searchicon"></SearchIcon>
			</div>
			<div className="header_Nav">
				<Link to="/login" className="header_Link">
					<div className="header_option">
						<span className="header_option1">Hello Fluke</span>
						<span className="header_option2">Sign In</span>
					</div>
				</Link>

				<Link to="/login" className="header_Link">
					<div className="header_option">
						<span className="header_option1">Return</span>
						<span className="header_option2">& Order</span>
					</div>
				</Link>

				<Link to="/login" className="header_Link">
					<div className="header_option">
						<span className="header_option1">Your</span>
						<span className="header_option2">Prime</span>
					</div>
				</Link>
				<Link to="/checkout" className="header_Link">
					<div className="header_option2 header_basket">
						<ShoppingBasketIcon></ShoppingBasketIcon>
						<span className="number_basket">0</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
