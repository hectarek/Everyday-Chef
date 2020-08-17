import React from "react";
import "../style/Ingredients.css";

function Ingredients ({ ingredients }) {
	return (
		<div>
			<li className="shopping__item">
				<div className="shopping__count">
					<input type="number" defaultValue={ingredients.count} step={ingredients.count} className="shopping__count-value" />
					<p>{ingredients.unit}</p>
				</div>
				<p className="shopping__description">{ingredients.ingredient}</p>
				<button className="shopping__delete btn-tiny">
					<svg>
						<use href="img/icons.svg#icon-circle-with-cross"></use>
					</svg>
				</button>
			</li>
		</div>
	);
}

export default Ingredients;
