import React, { useContext } from "react";
import "./CheckOut.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { CartContext } from "../../contexts/cart.context";

const CheckOutItem = ({ cartItem }) => {
	const { imageUrl, price, name, quantity } = cartItem;
	const { addToCart, cartItems, removeFromCart } = useContext(CartContext);

	const addHandler = () => {
		addToCart(cartItem);
	};

	const minusHandler = () => {
		removeFromCart(cartItem);
	};
	const removeHandler = () => {
		removeFromCart(cartItem);
	};
	return (
		<div className="checkout-container">
			<img src={imageUrl} alt={`${name}`} />
			<p>{name}</p>
			<p>
				<RemoveIcon onClick={minusHandler} /> {quantity}{" "}
				<AddIcon onClick={addHandler} />x ${price}
			</p>
			<p>total item :${quantity * price}</p>
			<div>
				<ClearIcon onClick={removeHandler} />
			</div>
		</div>
	);
};

export default CheckOutItem;
