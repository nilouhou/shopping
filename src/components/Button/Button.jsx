import React from "react";
import "./Button.scss";
const BUTTUON_STYLES = {
	primary: "primary",
	secondery: "secondery",
};

const Button = ({ children, buttonType, ...otherProps }) => {
	return (
		<button {...otherProps} className={buttonType}>
			{children}
		</button>
	);
};

export default Button;
