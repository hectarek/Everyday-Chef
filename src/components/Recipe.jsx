import React, { useState, useEffect } from 'react';

function Recipe() {

    const [data, setData] = useState('')


    useEffect(() => {
        
        async function getRecipes() {
            try {
                let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
                let data = await response.json();
                let result = await data.recipes;
                console.log({ result });

                setData(result[2])
                return data.recipes;
            } catch (error) {
                console.log(error);
            }
        }
    
        // Add this so that you dont get random api calls when the box is empty
        // if (query !== "") {
        //     getRecipes();
        // }

        getRecipes();

    }, []);

    

  return (
    <div className="recipe">
        <h3>Dinner Ideas</h3>
        <h2 className="recipe-title">{data.title}</h2>
        <img src={data.image_url} alt="pizza"/>
    </div>
  );
}

export default Recipe;
