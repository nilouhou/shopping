import styled from "styled-components";

export const BaseButton = styled.button`
	width: auto;
	margin: 0.3rem 0;
	border-radius: 0;
	box-sizing: border-box;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	padding: 1.2em 2em;
	text-align: center;
	transition: box-shadow 0.2s linear,
		background-color 0.15s cubic-bezier(0.2, 0.3, 0.25, 0.9);
`;

export const PrimaryButton = styled(BaseButton)`
	background: #000;
	border: 2px solid #000;
`;
export const SecondaryButton = styled(BaseButton)`
	background-color: #fd5c63;
	border: 2px solid #fd5c63;
	margin: 0 0.5rem;
`;
