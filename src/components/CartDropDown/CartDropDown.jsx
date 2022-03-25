import "./CartDropDown.scss";
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
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>

			<Button buttonType="primary" onClick={navigateHandler}>
				Checkout
			</Button>
		</div>
	);
};

export default CartDropDown;
