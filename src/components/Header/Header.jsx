import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
	height: 3.75rem;
	background-color: black;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;
	padding: 1rem;
`;

const Right = styled.div`
	display: flex;
	font-size: 1rem;
`;
const Center = styled.div``;

const Left = styled.div``;
const MenuItem = styled.div`
	margin: 0.5rem;
`;

const Header = () => {
	return (
		<Container>
			<Left>
				<h1>Baritzia</h1>
			</Left>
			<Center>Center</Center>
			<Right>
				<MenuItem>
					<Badge badgeContent={4} color="primary">
						<ShoppingCartOutlinedIcon />
					</Badge>
				</MenuItem>
				<MenuItem>Register</MenuItem>
				<MenuItem>Login</MenuItem>
			</Right>
		</Container>
	);
};

export default Header;
