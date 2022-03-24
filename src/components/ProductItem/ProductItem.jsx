import React from "react";
import Button from "../Button/Button";
import "./ProductItem.scss";

const ProductItem = ({ product: { name, price, imageUrl } }) => {
	return (
		<div className="product-container">
			<img src={imageUrl} alt={name} />
			<div className="product-info">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<Button buttonType="primary">Add to card</Button>
		</div>
	);
};

export default ProductItem;
