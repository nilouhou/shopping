import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../data/shop-data";
import { addCollectionandDocuments } from "../utils/firbase/firebase";

export const ProductContext = createContext({
	products: null,
});

export const ProductProvier = ({ children }) => {
	const [products, setProducts] = useState([]);
	const value = { products };

	useEffect(() => {
		addCollectionandDocuments("categories", SHOP_DATA);
	}, []);

	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};
