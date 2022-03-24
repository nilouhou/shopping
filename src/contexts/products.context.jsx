import { createContext, useState, useEffect } from "react";
import { productsData } from "../data/data";
import axios from "axios";

export const ProductContext = createContext({
	products: null,
});

export const ProductProvier = ({ children }) => {
	const [products, setPrpducts] = useState(productsData);
	const value = { products };

	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};
