import "./CartDropDown.scss";
import Button from "../Button/Button";

const CartDropDown = (CartOpen) => {
	return (
		<div
			className={`${
				CartOpen === true ? "show" : "hide"
			} cart-dropdown-container`}
		>
			<Button buttonType="primary">Checkout</Button>
		</div>
	);
};

export default CartDropDown;
