import React from 'react';

function List ({ ingredient }) {
    return (
        <div>
            <li class="shopping__item" >
        <div class="shopping__count">
            <input type="number" value="${ingredient.count}" step="${ingredient.count}" class="shopping__count-value"/>
            <p>${ingredient.unit}</p>
        </div>
        <p class="shopping__description">${ingredient.ingredient}</p>
        <button class="shopping__delete btn-tiny">
            <svg>
                <use href="img/icons.svg#icon-circle-with-cross"></use>
            </svg>
        </button>
    </li>
        </div>
        
    )
}

export default List;