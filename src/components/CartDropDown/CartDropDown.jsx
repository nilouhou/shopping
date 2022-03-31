import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from "./CartDropDown.style";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();
	const navigateHandler = () => navigate("/checkout");

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>

			<Button buttonType="primary" onClick={navigateHandler}>
				Checkout
			</Button>
		</CartDropdownContainer>
	);
};

export default CartDropDown;
