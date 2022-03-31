import React, { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useNavigate } from "react-router-dom";
import { ProductsContainer, Container, More } from "./Shop.style";

export const Shop = () => {
	const { products } = useContext(ProductContext);
	const navigate = useNavigate();

	return (
		<Container>
			{Object.keys(products).map((categoriesTitle) => {
				return (
					<div key={categoriesTitle}>
						<h1>{categoriesTitle}</h1>
						<ProductsContainer>
							{products[categoriesTitle].slice(1, 4).map((product) => (
								<ProductItem key={product.id} product={product} />
							))}
							<More onClick={() => navigate(`${categoriesTitle}`)}>
								View More
							</More>
						</ProductsContainer>
					</div>
				);
			})}
		</Container>
	);
};
