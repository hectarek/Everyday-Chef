import React, { useState, useEffect } from 'react';

import "../style/recipes.css"

function Recipes() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    
    async function getRecipes() {
      try {
          let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
          let data = await response.json();
          let results = await data.recipes;
          console.log({ results });

          setRecipes(results);

          return results;

      } catch (error) {
          console.log(error);
      }
    }

      getRecipes();

  }, [])


  return (
    <div className="recipes">

      {recipes.map(recipe => (
        <div key={recipe.title} className="recipes-container">
          <div className="recipes-image-container">
            <img className="recipes-image" src={recipe.image_url} alt={recipe.title} />
          </div>
          <div className="recipes-text-container">
            <h2 className="recipes-title">{recipe.title}</h2>
            <h3 className="recipes-publisher">{recipe.publisher}</h3>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Recipes;
