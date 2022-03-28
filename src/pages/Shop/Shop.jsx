import React, { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductItem from "../../components/ProductItem/ProductItem";
import "./Shop.scss";

export const Shop = () => {
	const { products } = useContext(ProductContext);
	console.log(products);
	return (
		<div className="main-container">
			{Object.keys(products).map((categoriesTitle) => {
				return (
					<div key={categoriesTitle}>
						<h1 className="title">{categoriesTitle}</h1>
						<div className="products-container">
							{products[categoriesTitle].map((product) => (
								<ProductItem key={product.id} product={product} />
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};
