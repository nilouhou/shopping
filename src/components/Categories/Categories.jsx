import React from "react";
import { categories } from "../../data/data";
import CategoryItem from "../CategoryItem/CategoryItem";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	padding: 8px;
	gap: 8px;
`;

const Categories = () => {
	return (
		<Wrapper>
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</Wrapper>
	);
};

export default Categories;
