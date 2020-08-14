import React from 'react';

import "../style/recipes.css"

function Recipes({ recipe }) {

  return (
    <div className="recipes">
        <div className="recipes-container">
          <div className="recipes-image-container">
            <img className="recipes-image" src={recipe.image_url} alt={recipe.title} />
          </div>
          <div className="recipes-text-container">
            <h2 className="recipes-title">{recipe.title}</h2>
            <h3 className="recipes-publisher">{recipe.publisher}</h3>
          </div>
        </div>
    </div>
  );
}

export default Recipes;
