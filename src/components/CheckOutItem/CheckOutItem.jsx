import React, { useContext } from "react";
import {
	CheckoutItemContainer,
	ImageContainer,
	Name,
	Price,
	Quantity,
	Value,
	Clear,
} from "./CheckOutItem.style";
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
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<Name> {name} </Name>
			<Quantity>
				<RemoveIcon onClick={minusHandler} className="arrow" />
				<Value> {quantity}</Value>
				<AddIcon
					onClick={addHandler}
					arrow={(props) => props.arrow && "cursor:pointor"}
				/>
			</Quantity>
			<Price>${quantity * price}</Price>
			<Clear>
				<ClearIcon onClick={removeHandler} />
			</Clear>
		</CheckoutItemContainer>
	);
};

export default CheckOutItem;
