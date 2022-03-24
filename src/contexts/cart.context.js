import { createContext, useState } from "react";

export const CartContext = createContext({
	CartOpen: true,
	setCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
	const [CartOpen, setCartOpen] = useState(false);
	const value = { CartOpen, setCartOpen };
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
