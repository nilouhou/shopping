import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
	CartOpen: true,
	setCartOpen: () => {},
	cartItems: [],
	addToCart: () => {},
	cartCount: 0,
	removeFromCart: () => {},
	clearCart: () => {},
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

//function to decrease the amount
const removeCartItem = (cartItems, productsToRemove) => {
	const existedItem = cartItems.find((item) => item.id === productsToRemove.id);
	if (existedItem.quantity === 1) {
		return cartItems.filter((item) => item.id !== productsToRemove.id);
	}
	return cartItems.map((item) =>
		item.id === productsToRemove.id
			? { ...item, quantity: item.quantity - 1 }
			: item
	);
};

const clearCartItem = (cartItems, cartItemToRemove) =>
	cartItems.filter((item) => item.id !== cartItemToRemove.id);

export const CartProvider = ({ children }) => {
	const [CartOpen, setCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	//calculate the qauntity of items in the cart
	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	//method when click shop items added to cart
	//it will run another function to see if the item already exit in the cart or not, if it does add the quality
	const addToCart = (productsToAdd) => {
		setCartItems(addCartItem(cartItems, productsToAdd));
	};

	const removeFromCart = (productsToRemove) => {
		setCartItems(removeCartItem(cartItems, productsToRemove));
	};

	const clearCart = (cartItemToRemove) => {
		setCartItems(clearCartItem(cartItems, cartItemToRemove));
	};
	const value = {
		CartOpen,
		setCartOpen,
		addToCart,
		cartItems,
		cartCount,
		removeFromCart,
		clearCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
