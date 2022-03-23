import React, { useContext } from "react";
import { ProductContext } from "../../contexts/products.contect";

export const Shop = () => {
	const { products } = useContext(ProductContext);
	return (
		<div>
			{products.map(({ name, id }) => (
				<p key={id}>{name}</p>
			))}
		</div>
	);
};
