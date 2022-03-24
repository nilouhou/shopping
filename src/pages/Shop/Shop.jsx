import React, { useContext } from "react";
import { ProductContext } from "../../contexts/products.contect";
import ProductItem from "../../components/ProductItem/ProductItem";

export const Shop = () => {
	const { products } = useContext(ProductContext);
	return (
		<div>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	);
};
