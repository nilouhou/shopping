import "./CartDropDown.scss";
import Button from "../Button/Button";

const CartDropDown = () => {
	return (
		<div className="cart-dropdown-container">
			<Button buttonType="primary">Checkout</Button>
		</div>
	);
};

export default CartDropDown;
