import React from "react";
import "../style/List.css";
import "../style/ListTag.css";

function List({ recipe }) {
  return (
    <div>
      <button className="btn btn-danger recipe__btn">
        Add to shopping list
      </button>

      <div class="recipe__directions">
        <h2 class="heading-2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__by">The Pioneer Woman</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn btn-info btn-small recipe__btn"
          href={recipe.url}
          target="_blank"
        >
          Directions
        </a>
      </div>
    </div>
  );
}

export default List;
