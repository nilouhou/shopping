import React, { useContext } from "react";
import CheckOutItem from "../../components/CheckOutItem/CheckOutItem";
import { CartContext } from "../../contexts/cart.context";
import {
	CheckoutContainer,
	CheckoutHeader,
	Total,
	HeaderBlock,
} from "./CheckOut.style";

const CheckOut = () => {
	const { cartItems, total } = useContext(CartContext);
	return (
		<CheckoutContainer>
			<h1>Checkout</h1>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems &&
				cartItems.map((cartItem) => (
					<CheckOutItem key={cartItem.id} cartItem={cartItem} />
				))}

			<Total>Total:${total} </Total>
		</CheckoutContainer>
	);
};

export default CheckOut;
