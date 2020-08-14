import React from "react";

function Recipe({ recipe }) {

	return (
		<div className="recipe">
			<figure className="recipe__fig">
			<img src={recipe.image_url} alt={recipe.title} className="recipe__img"/>
				<h1 className="recipe__title">
					<span>${recipe.title}</span>
				</h1>
			</figure>
			<div className="recipe__details">
				<div className="recipe__info">
					<svg className="recipe__info-icon">
						<use href="img/icons.svg#icon-stopwatch"></use>
					</svg>
					<span className="recipe__info-data recipe__info-data--minutes">{2}</span>
					<span className="recipe__info-text"> minutes</span>
				</div>
				<div className="recipe__info">
					<svg className="recipe__info-icon">
						<use href="img/icons.svg#icon-man"></use>
					</svg>
					<span className="recipe__info-data recipe__info-data--people">{4}</span>
					<span className="recipe__info-text"> servings</span>

					<div className="recipe__info-buttons">
						<button className="btn-tiny btn-decrease">
							<svg>
								<use href="img/icons.svg#icon-circle-with-minus"></use>
							</svg>
						</button>
						<button className="btn-tiny btn-increase">
							<svg>
								<use href="img/icons.svg#icon-circle-with-plus"></use>
							</svg>
						</button>
					</div>
				</div>
				<button className="recipe__love">
					<svg className="header__likes">
						<use href="img/icons.svg#icon-heart${isLiked ? '' : '-outlined'}"></use>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default Recipe;
