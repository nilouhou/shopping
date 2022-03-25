import React, { useContext } from "react";
import CheckOutItem from "../../components/CheckOutItem/CheckOutItem";
import { CartContext } from "../../contexts/cart.context";

const CheckOut = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<div>
			<h1>Checkout</h1>
			{cartItems &&
				cartItems.map((cartItem) => (
					<CheckOutItem key={cartItem.id} cartItem={cartItem} />
				))}
		</div>
	);
};

export default CheckOut;
