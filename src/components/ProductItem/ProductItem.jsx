import React from "react";

const ProductItem = ({ product: { name, price, imageUrl } }) => {
	return (
		<div className="product-container">
			<img src={imageUrl} alt={name} />
			<p>
				{name}
				<span>{price}</span>
			</p>
		</div>
	);
};

export default ProductItem;
