import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { Container, Left, Right, NavLink } from "./Header.style";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutFirebase } from "../../utils/firbase/firebase";
import CartDropDown from "../CartDropDown/CartDropDown";
import { MenuItem } from "@mui/material";

const Header = () => {
	const { currentUser } = useContext(UserContext);
	const { setCartOpen, CartOpen, cartCount } = useContext(CartContext);

	const cartHandler = () => {
		setCartOpen(!CartOpen);
	};
	return (
		<>
			<Container>
				<Left>
					<NavLink to="/">
						<h1>Baritzia</h1>
					</NavLink>
				</Left>

				<Right>
					<NavLink to="/shop">Shopping</NavLink>

					<MenuItem onClick={cartHandler}>
						<Badge badgeContent={cartCount} color="primary">
							<ShoppingCartOutlinedIcon />
						</Badge>
					</MenuItem>

					<NavLink to="/register">Register</NavLink>

					{currentUser ? (
						<NavLink as="span" onClick={signOutFirebase}>
							Sign Out
						</NavLink>
					) : (
						<NavLink to="/login">Login</NavLink>
					)}

					{CartOpen && <CartDropDown />}
				</Right>
			</Container>

			<Outlet />
		</>
	);
};

export default Header;
