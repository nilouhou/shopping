import styled from "styled-components";

export const ProductsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px;
`;

export const Container = styled.div`
	padding: 2rem;
	h1 {
		text-transform: capitalize;
	}
`;
