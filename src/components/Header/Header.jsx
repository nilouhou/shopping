import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutFirebase } from "../../utils/firbase/firebase";
import CartDropDown from "../CartDropDown/CartDropDown";

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
	cursor: pointer;
`;

const Header = () => {
	const { currentUser } = useContext(UserContext);
	const { setCartOpen, CartOpen } = useContext(CartContext);

	const cartHandler = () => {
		setCartOpen(!CartOpen);
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
					<MenuItem onClick={cartHandler}>
						<Badge badgeContent={4} color="primary">
							<ShoppingCartOutlinedIcon />
						</Badge>
					</MenuItem>
					<MenuItem>
						<Link to="/register">Register</Link>
					</MenuItem>
					<MenuItem>
						{currentUser ? (
							<span onClick={signOutFirebase}>Sign Out</span>
						) : (
							<Link to="/login">Login</Link>
						)}
					</MenuItem>
					{CartOpen && <CartDropDown />}
				</Right>
			</Container>

			<Outlet />
		</>
	);
};

export default Header;
