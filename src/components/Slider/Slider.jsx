import React from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	cursor: pointer;
	opacity: 0.5;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
`;
const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
`;

const Img = styled.img`
	height: 80%;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 70px;
`;
const Description = styled.p`
	margin: 50px 0;
	font-size: 20px;
	font-weight: 500;
`;
const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
`;

const Slider = () => {
	return (
		<Container>
			<Arrow direction="left">
				<ArrowLeftOutlinedIcon />
			</Arrow>
			<Wrapper>
				<Slide>
					<ImgContainer>
						<Img src="https://i.ibb.co/DG69bQ4/2.png" />
					</ImgContainer>
					<InfoContainer>
						<Title>Summer Sale!</Title>
						<Description>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Cupiditate asperiores aliquam nobis labore, porro adipisci numquam
							minus consectetur molestiae! Velit quo quaerat neque distinctio,
							possimus numquam hic adipisci sint impedit?
						</Description>
						<Button>Shop now</Button>
					</InfoContainer>
				</Slide>
				<Slide>
					<ImgContainer>
						<Img src="https://i.ibb.co/DG69bQ4/2.png" />
					</ImgContainer>
					<InfoContainer>
						<Title>Summer Sale!</Title>
						<Description>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Cupiditate asperiores aliquam nobis labore, porro adipisci numquam
							minus consectetur molestiae! Velit quo quaerat neque distinctio,
							possimus numquam hic adipisci sint impedit?
						</Description>
						<Button>Shop now</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>
			<Arrow direction="right">
				<ArrowRightOutlinedIcon />
			</Arrow>
		</Container>
	);
};

export default Slider;
