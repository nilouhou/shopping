import { createContext, useState } from "react";

export const CartContext = createContext({
	CartOpen: true,
	setCartopen: () => null,
});

export const CartProvider = ({ children }) => {
	const [CartOpen, setCartopen] = useState(false);
	const value = { CartOpen, setCartopen };
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
