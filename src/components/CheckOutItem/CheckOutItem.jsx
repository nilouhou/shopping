import React, { useContext } from "react";
import "./CheckOutItem.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { CartContext } from "../../contexts/cart.context";

const CheckOutItem = ({ cartItem }) => {
	const { imageUrl, price, name, quantity } = cartItem;
	const { addToCart, removeFromCart, clearCart } = useContext(CartContext);

	const addHandler = () => {
		addToCart(cartItem);
	};

	const minusHandler = () => {
		removeFromCart(cartItem);
	};
	const removeHandler = () => {
		clearCart(cartItem);
	};
	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className="name"> {name} </span>
			<span className="quantity">
				<RemoveIcon onClick={minusHandler} className="arrow" />
				<span className="value"> {quantity}</span>
				<AddIcon onClick={addHandler} className="arrow" />
			</span>
			<p className="price">${quantity * price}</p>
			<div>
				<ClearIcon onClick={removeHandler} />
			</div>
		</div>
	);
};

export default CheckOutItem;
