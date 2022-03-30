import React, { useContext } from "react";
import { categories } from "../../data/data";
import { ProductContext } from "../../contexts/products.context";
import CategoryItem from "../CategoryItem/CategoryItem";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 1rem;
`;

const Categories = () => {
	const { products } = useContext(ProductContext);

	return (
		<Wrapper>
			{Object.keys(products).map((title) =>
				products[title]
					.slice(0, 1)
					.map((category) => (
						<CategoryItem key={title} category={category} title={title} />
					))
			)}
		</Wrapper>
	);
};

export default Categories;
