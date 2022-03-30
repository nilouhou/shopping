import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	height: 3.75rem;
	background-color: black;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;
	padding: 1rem;
`;

export const NavLink = styled(Link)`
	margin: 0.5rem;
	cursor: pointer;
`;

export const Right = styled.div`
	display: flex;
	font-size: 1rem;
`;

export const Left = styled.div``;
export const MenuItem = styled.div`
	margin: 0.5rem;
	cursor: pointer;
`;
