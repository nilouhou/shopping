import styled from "styled-components";

export const ProductsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px;
`;

export const More = styled.div` 
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fff;
		opacity: 0.5;
		border: 1px solid #d3d3d3;
		height: 95%;
		&:hover {
			background: #000;
			color: #fff;
			cursor: pointer;
		}
	}
`;

export const Container = styled.div`
	padding: 2rem;
	h1 {
		text-transform: capitalize;
	}
`;
