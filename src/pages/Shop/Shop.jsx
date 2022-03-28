import React, { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useNavigate } from "react-router-dom";
import "./Shop.scss";

export const Shop = () => {
	const { products } = useContext(ProductContext);
	const navigate = useNavigate();

	return (
		<div className="main-container">
			{Object.keys(products).map((categoriesTitle) => {
				return (
					<div key={categoriesTitle}>
						<h1 className="title">{categoriesTitle}</h1>
						<div className="products-container">
							{products[categoriesTitle].slice(1, 4).map((product) => (
								<ProductItem key={product.id} product={product} />
							))}
							<div
								className="more"
								onClick={() => navigate(`${categoriesTitle}`)}
							>
								View More
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
