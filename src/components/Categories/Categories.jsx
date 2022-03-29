import React, { useContext } from "react";
import { categories } from "../../data/data";
import { ProductContext } from "../../contexts/products.context";
import CategoryItem from "../CategoryItem/CategoryItem";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	padding: 8px;
	gap: 8px;
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
