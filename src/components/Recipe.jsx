import React, { useState, useEffect } from 'react';

function Recipe() {

    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [result, setResults] = useState([]);

    function onSubmit(e) {
        e.preventDefault();
        setQuery(search);
    }

    useEffect(() => {
        
        async function getRecipes() {
            try {
                let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
                let result = await response.json();
                console.log({ result })
                return result.recipes;
            } catch (error) {
                console.log(error);
            }
        }
    
        if (query !== "") {
            getRecipes();
        }

    }, [query]);

    

  return (
    <div className="recipe">
        <h2 
            className="recipe-title"
            value={search}
            >a</h2>
    </div>
  );
}

export default Recipe;
