import React from "react";
import { BaseButton, PrimaryButton, SecondaryButton } from "./Button.style";
export const BUTTUON_STYLES = {
	base: "base",
	primary: "primary",
	secondary: "secondary",
};

const getButton = (buttonType = BUTTUON_STYLES.base) =>
	({
		[BUTTUON_STYLES.base]: BaseButton,
		[BUTTUON_STYLES.primary]: PrimaryButton,
		[BUTTUON_STYLES.secondary]: SecondaryButton,
	}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType);
	return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
