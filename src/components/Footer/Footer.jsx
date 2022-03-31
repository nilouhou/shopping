import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	height: 3.75rem;
	background-color: black;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;
	padding: 1rem;
`;

const Footer = () => {
	return (
		<>
			<Container> &copy;Developed by Nilou Houshmand | Faratech.ca</Container>
		</>
	);
};

export default Footer;
