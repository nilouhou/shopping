import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
	min-width: 30%;
	height: 240px;
	flex: 1 1 auto;
	position:relative;
	overflow:hidden;
	text-transform:uppercase;
	&:hover {
		cursor: pointer;
		transition: .5s ease;
		opacity:0.5;
		
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	color: white;
	margin-bottom: 20px;
`;

const Button = styled.button`
	border: none;
	padding: 10px;
	background-color: white;
	color: gray;
	cursor: pointer;
	font-weight: 600;
`;

const CategoryItem = ({ title, category }) => {
	const navigate = useNavigate();
	console.log({ category });
	return (
		<Container>
			<Image src={category.imageUrl} alt={title} />
			<Info>
				<Title>{title}</Title>
				<Button onClick={() => navigate(`./shop/${title}`)}>SHOP NOW</Button>
			</Info>
		</Container>
	);
};

export default CategoryItem;
