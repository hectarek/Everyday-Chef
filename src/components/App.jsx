// Basic Imports
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Component Imports
import Header from "./Header";
import Footer from "./Footer";
import Recipes from "./Recipes";
import Recipe from "./Recipe";
import Search from "./Search";
import Ingredients from "./Ingredients";
import Login from "./Login";

//Style Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/App.css";

//Dependency Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import uniqid from 'uniqid';

//  =========== Beginning of Code ===========

library.add(fab, fas);

const dumbApi = "https://forkify-api.herokuapp.com/api/search?q=";
const backendApi = "https://cors-anywhere.herokuapp.com/https://everydaychef-api.herokuapp.com/recipes?q=";
const newApi = "https://cors-anywhere.herokuapp.com/https://everydaychef-api.herokuapp.com/recipes?q="

const elements = {

  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search__field'),
  searchRes: document.querySelector('.results'),
  searchResList: document.querySelector('.results__list'),
  searchResPages: document.querySelector('.results__pages'),
  recipe: document.querySelector('.recipe'),
  shopping: document.querySelector('.shopping__list'),
  likesMenu: document.querySelector('.likes__field'),
  likesList: document.querySelector('.likes__list')

}




function useRecipe(query) {
	const [loading, setLoading] = useState(false);
	const [results, setResults] = useState([]);

	useEffect(() => {

		async function getRecipes() {
			try {
				setLoading(true);
        let response = await fetch(`${newApi}${query}`);
        let data = await response.json();

        setResults(
          data.map(recipe => {
            return recipe.recipe
          })
        );

			} catch (error) {
				console.log(error);
			} finally {
        setLoading(false);
			}
		}

		if (query !== "") {
		  getRecipes();
    }
    
	}, [query]);

	return [results, loading];
}

function App() {

	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("");
  const [recipes, loading] = useRecipe(query);

  const [loaded, setLoaded] = useState(false);

  const getDomain = (url) => {
    return url.replace('http://', '').replace('https://', '').replace('www.', '').split("/")[0].toString();
  }

	const handleChange = (e) => {
    setSearch(e.target.value);
	};

	const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const renderRecipes = () => {

    if(recipes !== '') {

      console.log(recipes);
      return recipes.map( (recipe, index) => {
        return (
          <Recipes 
            key={index}
            recipe={recipe} 
            label={recipe.label} 
            image={recipe.image} 
            url={getDomain(recipe.url)} 
          />
          )
      })
    } else {
      return (<h1>Recipes Go Here</h1>)
    }
      
  }

  const getRecipe = (id) => {
    
  }
  
  const renderRecipe = (recipe) => {
    
    if (recipes !== '') {
      return (""
        // <Recipe
        //   recipe={recipe}
        //   title={recipe.label}
        //   image_url={recipe.image}
        //   publisher={() => {getDomain(recipe.url)}}
        // />
      )
    } else {
      return (<h1>Recipes Go Here</h1>)
    }
    
  }

	return (
		<Router>
			<div className="container">

				<Header />

				<Switch>

					<Route path="/login">
						<Login />
					</Route>

					<Route path="/">
						<div className="app-container">
							<div id="header-div" className="row d-flex justify-content-center text-center">
								<div id="middle-main-div" className="col-md-6 m-4 position-relative container-fluid">
                  <Search 
                    search={search} 
                    handleChange={handleChange} 
                    handleSubmit={handleSubmit} 
                    />
								</div>
							</div>

							<div id="main-row" className="row d-flex justify-content-center text-center">

								<div id="recipes-div" className="col-md-3 position-relative container-fluid">
									<h1 id="rech1">Recipes</h1>

									{renderRecipes()}

								</div>

								<div id="middle-div" className="col-md-6 position-relative container-fluid">
									<h1>Middle</h1>

									{renderRecipe(recipes[3])}

								</div>

								<div id="ingredients-div" className="col-md-3 position-relative container-fluid">
									<h1 id="ingH1">Ingredients</h1> <hr></hr>
									<div className="ing-border">
										<Ingredients />
									</div>
								</div>

							</div>
						</div>
					</Route>

					<Route path="/favorites">

          </Route>

				</Switch>

				<div id="footer-div" className="row d-flex justify-content-center text-center">
					<Footer />
				</div>

			</div>
		</Router>
	);
}

export default App;
