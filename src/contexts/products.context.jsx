import { createContext, useState, useEffect } from "react";
import { SHOP_DATA } from "../data/shop-data";
import axios from "axios";

export const ProductContext = createContext({
	products: null,
});

export const ProductProvier = ({ children }) => {
	const [products, setProducts] = useState([]);
	const value = { products };

	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};
