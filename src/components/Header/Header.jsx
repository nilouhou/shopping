import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { UserContext } from "../../contexts/user.context";
import { signOutFirebase } from "../../utils/firbase/firebase";

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

const Left = styled.div``;
const MenuItem = styled.div`
	margin: 0.5rem;
`;

const Header = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	console.log(currentUser);

	const signOutHandler = () => {
		signOutFirebase();
		setCurrentUser(null);
	};
	return (
		<>
			<Container>
				<Left>
					<Link to="/">
						<h1>Baritzia</h1>
					</Link>
				</Left>

				<Right>
					<MenuItem>
						<Link to="/shop">Shopping</Link>
					</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color="primary">
							<ShoppingCartOutlinedIcon />
						</Badge>
					</MenuItem>
					<MenuItem>
						<Link to="/register">Register</Link>
					</MenuItem>
					<MenuItem>
						{currentUser ? (
							<span onClick={signOutHandler}>Sign Out</span>
						) : (
							<Link to="/login">Login</Link>
						)}
					</MenuItem>
				</Right>
			</Container>

			<Outlet />
		</>
	);
};

export default Header;
