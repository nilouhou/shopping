import React, { useContext } from "react";
import CheckOutItem from "../../components/CheckOutItem/CheckOutItem";
import { CartContext } from "../../contexts/cart.context";
import "./CheckOut.scss";

const CheckOut = () => {
	const { cartItems, total } = useContext(CartContext);
	return (
		<div className="checkout-container">
			<h1>Checkout</h1>
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems &&
				cartItems.map((cartItem) => (
					<CheckOutItem key={cartItem.id} cartItem={cartItem} />
				))}

			<div className="total">Total:${total} </div>
		</div>
	);
};

export default CheckOut;
