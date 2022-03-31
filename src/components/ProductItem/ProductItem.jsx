import React, { useContext } from "react";
import Button, { BUTTUON_STYLES } from "../Button/Button";
import {
	ProductContainer,
	Img,
	ProductInfo,
	Name,
	Price,
} from "./ProductItem.style";
import { CartContext } from "../../contexts/cart.context";

const ProductItem = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addToCart } = useContext(CartContext);
	const addToCartHandler = () => addToCart(product);

	return (
		<ProductContainer>
			<Img src={imageUrl} alt={name} />
			<ProductInfo>
				<Name>{name}</Name>
				<Price>${price}</Price>
			</ProductInfo>
			<Button buttonType={BUTTUON_STYLES.primary} onClick={addToCartHandler}>
				Add to card
			</Button>
		</ProductContainer>
	);
};

export default ProductItem;
