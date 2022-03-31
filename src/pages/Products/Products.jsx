import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";
import { ProductContext } from "../../contexts/products.context";
import { ProductsContainer, Container } from "./Products.style";

const Products = () => {
	const { category } = useParams();
	const { products } = useContext(ProductContext);
	const productsData = products[category];
	return (
		<Container>
			<h1>{category}</h1>
			<ProductsContainer>
				{productsData &&
					productsData.map((product) => (
						<ProductItem key={product.id} product={product} />
					))}
			</ProductsContainer>
		</Container>
	);
};

export default Products;
