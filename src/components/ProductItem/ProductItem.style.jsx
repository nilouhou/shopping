import styled from "styled-components";
import { PrimaryButton } from "../Button/Button.style";

export const ProductContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	${PrimaryButton} {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 255px;
		display: none;
	}

	&:hover {
		${PrimaryButton} {
			opacity: 0.85;
			display: block;
		}
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 95%;
	object-fit: cover;
	margin-bottom: 5px;

	&:hover {
		opacity: 0.8;
	}
`;

export const ProductInfo = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const Name = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

export const Price = styled.span`
	width: 10%;
`;
