import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import uniqid from 'uniqid';

import "../style/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Recipes from "./Recipes";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";
library.add(fab, fas);

const dumbApi = "https://forkify-api.herokuapp.com/api/search?q="
const backendApi = "https://cors-anywhere.herokuapp.com/https://everydaychef-api.herokuapp.com/recipes?q="

function useRecipe(query) {

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    
    async function getRecipes() {
      try {
        setLoading(true);
          let response = await fetch(`${dumbApi}${query}`);
          let data = await response.json();

          console.log(data);

          setResults(data.recipes);

      } catch (error) {
          console.log(error);
      } finally {
        setLoading(false);
      }
    }
    
    if (query !== ""){
      getRecipes();
    }

  }, [query])

  return [results, loading];
} 

function App() {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [recipes, loading] = useRecipe(query);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="app-container">
      <div
        id="header-div"
        className="row d-flex justify-content-center text-center"
      >
        <Header
          search={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div
        id="main-row"
        className="row d-flex justify-content-center text-center"
      >
        <div
          id="recipes-div"
          className="col-md-3 position-relative container-fluid"
        >
          <h1>Recipes</h1>

          {
            loading ? (
              <h1>Recipes Go Here</h1>
            ) : (
              recipes.map(recipe => {
                return (
                  <Recipes
                    recipe={recipe}
                    key={()=>uniqid()} 
                    title={recipe.title}
                    image_url={recipe.image_url}
                    publisher={recipe.publisher}
                  />
              )} 
            ))
          }
          
        </div>
        <div
          id="middle-div"
          className="col-md-3 position-relative container-fluid"
        >
          <h1>Middle</h1>

          {
            loading ? (
              <h2>Recipe goes here</h2>
            ) : (
              // <Recipe
              //   recipe={recipes[2]}
              //   title={recipes[2].title}
              //   image_url={recipes[2].image_url}
              //   publisher={recipes[2].publisher}
              // />
              <h2>hi there</h2>
            )
         }
         
        </div>
        <div
          id="ingredients-div"
          className="col-md-3 position-relative container-fluid"
        >
          <h1>Ingredients</h1>
          <Ingredients />
        </div>
      </div>
      <div
        id="footer-div"
        className="row d-flex justify-content-center text-center"
      >
        <h1>Footer</h1>
        <Footer />
      </div>
    </div>
  );
}

export default App;

// this is a second test
