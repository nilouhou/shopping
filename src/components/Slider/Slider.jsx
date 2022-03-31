import React, { useState } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../../data/data";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button, { BUTTUON_STYLES } from "../Button/Button";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
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
	z-index: 2;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
	transition: 1s ease;
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	padding: 10px;
	background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	justify-content: flex-end;
`;

const Img = styled.img`
	height: 100%;
`;
const InfoContainer = styled.div`
	flex: 2;
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

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
			console.log(slideIndex);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
			console.log(slideIndex);
		}
	};

	const navigate = useNavigate();
	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<ArrowLeftOutlinedIcon />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide bg={item.bg} key={item.id}>
						<ImgContainer>
							<Img src={item.img} />
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Description>{item.desc}</Description>
							<Button
								buttonType={BUTTUON_STYLES.secondary}
								onClick={() => {
									navigate("./shop");
								}}
							>
								Shop Now
							</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowRightOutlinedIcon />
			</Arrow>
		</Container>
	);
};

export default Slider;
