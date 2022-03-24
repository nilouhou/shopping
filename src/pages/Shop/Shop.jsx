import React, { useContext } from "react";
import { ProductContext } from "../../contexts/products.contect";
import ProductItem from "../../components/ProductItem/ProductItem";
import "./Shop.scss";

export const Shop = () => {
	const { products } = useContext(ProductContext);
	return (
		<div className="products-container">
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	);
};
