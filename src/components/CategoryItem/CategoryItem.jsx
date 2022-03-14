import React from "react";

const CategoryItem = ({ category: { img, title } }) => {
	return (
		<div>
			<img src={img} alt={title} />
			<h1>{title}</h1>
		</div>
	);
};

export default CategoryItem;
