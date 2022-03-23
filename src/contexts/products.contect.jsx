import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext({
	product: null,
	setProduct: () => null,
});

export const ProductProvier = ({ children }) => {
	const [product, setPrpduct] = useState(null);
	const value = { product, setPrpduct };
	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
};
