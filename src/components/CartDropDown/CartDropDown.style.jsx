import styled from "styled-components";

//if I want to target only specific button styled for example primary I need to do this
//1- import {PrimaryButton} from "../button/button.style"
//2- ${PrimaryButton}{
//			margintop:auto }
// Here I target any buttons

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 59px;
	right: 40px;
	z-index: 5;
	color: #fd5c63;

	button {
		margin-top: auto;
	}
`;

export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

export const CartItems = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
`;
