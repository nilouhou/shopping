import React, { useContext } from "react";
import Button from "../Button/Button";
import "./ProductItem.scss";
import { CartContext } from "../../contexts/cart.context";

const ProductItem = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addToCart } = useContext(CartContext);
	const addToCartHandler = () => addToCart(product);

	return (
		<div className="product-container">
			<img src={imageUrl} alt={name} />
			<div className="product-info">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<Button buttonType="primary" onClick={addToCartHandler}>
				Add to card
			</Button>
		</div>
	);
};

export default ProductItem;
