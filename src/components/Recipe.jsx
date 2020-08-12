import React from 'react';

function Recipe() {

    async function getRecipes() {
        let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
        let data = await response.json();
        return data.recipes;
    }

    async function getRecipeTitle(i) {
        let recipe = await getRecipes();
        return recipe[i].title;
        
    }

  return (
    <div className="recipe">
        <h2 className="recipe-title">{getRecipeTitle(3)}</h2>
    </div>
  );
}

export default Recipe;
