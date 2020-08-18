import React from "react";
import "../style/Ingredients.css";

function Ingredients ({ ingredients }) {
	return (
		<div>
			<li className="shopping__item">
				<div className="shopping__count">
					<input className="shopping__count-value" type="number" defaultValue={ingredients.count} step={ingredients.count}  />
					<p>{ingredients.unit}</p>
				</div>
				<p className="shopping__description">{ingredients.ingredient}</p>
				<button className="shopping__delete btn btn-danger">x</button>
			</li>
		</div>
	);
}

export default Ingredients;
