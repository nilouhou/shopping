import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../data/shop-data";
import { getDataFromFireStore } from "../utils/firbase/firebase";

export const ProductContext = createContext({
	products: null,
});

export const ProductProvier = ({ children }) => {
	const [products, setProducts] = useState([]);
	const value = { products };

	useEffect(() => {
		const getData = async () => {
			const catgoriesMap = await getDataFromFireStore();
			console.log(catgoriesMap);
		};

		getData();
	}, []);
	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};
