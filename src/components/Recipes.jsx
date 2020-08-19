import React from "react";

import "../style/Recipes.css";

function Recipes({ recipe, active ,handleClick }) {
  return (
    <div className={active ? "recipes active" : "recipes"} onClick={() => handleClick(recipe)}>
      <div className="recipes-container">
        <div className="recipes-image-container">
          <img
            className="recipes-image"
            src={recipe.image}
            alt={recipe.label}
          />
        </div>
        <div className="recipes-text-container">
          <h2 className="recipes-title">{recipe.label}</h2>
          <h3 className="recipes-publisher">{recipe.source}</h3>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
