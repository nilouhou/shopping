import React from "react";
import { categories } from "../../data/data";
import CategoryItem from "../CategoryItem/CategoryItem";

const Categories = () => {
	return (
		<div>
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
};

export default Categories;
