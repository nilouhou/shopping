import { createContext, useState } from "react";

export const CartContext = createContext({
	CartOpen: true,
	setCartOpen: () => {},
	cartItems: [],
	addToCart: () => {},
});

//function to to see if the item already exit in the cart or not, if it does add the quality
const addCartItem = (cartItems, productsToAdd) => {
	//if item already exit
	const existedItem = cartItems.find((item) => item.id === productsToAdd.id);
	if (existedItem) {
		return cartItems.map((item) =>
			item.id === productsToAdd.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		);
	}

	return [...cartItems, { ...productsToAdd, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
	const [CartOpen, setCartOpen] = useState(false);

	const [cartItems, setCartItems] = useState([]);

	//method when click shop items added to cart
	//it will run another function to see if the item already exit in the cart or not, if it does add the quality
	const addToCart = (productsToAdd) => {
		setCartItems(addCartItem(cartItems, productsToAdd));
	};

	const value = { CartOpen, setCartOpen, addToCart, cartItems };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
