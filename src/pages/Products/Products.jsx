import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";
import { ProductContext } from "../../contexts/products.context";

const Products = () => {
	const { category } = useParams();
	const { products } = useContext(ProductContext);
	const productsData = products[category];
	return (
		<div>
			<h1>{category}</h1>
			<div className="products-container">
				{productsData &&
					productsData.map((product) => (
						<ProductItem key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export default Products;
