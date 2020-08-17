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
import List from "./List";
import User from './User';
import Signup from './Signup';


//Style Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/App.css";
import '../style/Login.css'

//Dependency Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

//  =========== Beginning of Code ===========

library.add(fab, fas);

const dumbApi = "https://forkify-api.herokuapp.com/api/search?q=";
const backendApi = "https://cors-anywhere.herokuapp.com/https://everydaychef-api.herokuapp.com/recipes?q=";
const newApi = "https://cors-anywhere.herokuapp.com/https://everydaychef-api.herokuapp.com/recipes?q=";

const elements = {
	searchForm: document.querySelector(".search"),
	searchInput: document.querySelector(".search__field"),
	searchRes: document.querySelector(".results"),
	searchResList: document.querySelector(".results__list"),
	searchResPages: document.querySelector(".results__pages"),
	recipe: document.querySelector(".recipe"),
	shopping: document.querySelector(".shopping__list"),
	likesMenu: document.querySelector(".likes__field"),
	likesList: document.querySelector(".likes__list"),
};

const blankRecipe = {
	id: null,
	label: "Crisp Tacos Picadillo",
	image: "https://www.edamam.com/web-img/32d/32da8c201c42d8aae7a7f51449c83e2a.jpg",
	url: "http://www.lottieanddoof.com/2009/07/picadillo/",
	yield: 14.0,
	totalTime: 30.0,
	ingredientLines: ["2 tsp Vegetable Oil (picadillo)", "1/2 x white onion (large), chopped (1 1/2 cups) (picadillo)", "1 lb Ground Chuck (80 percent lean) (picadillo)", "1 tbsp minced garlic cloves(1 to 2 cloves) (picadillo)", "2 x tomatoes (medium), diced (2 3/4 cups) (picadillo)", "1 1/2 tsp Paprika (picadillo)", "salsa Picante, for serving (tacos)"],
};

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
					data.map((recipe) => {
						return recipe.recipe;
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
	const [recipe, setRecipe] = useState("");

	const [modal, setModal] = useState(false);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const showModal = () => {
		setModal(true);
	}

	const hideModal = () => {
		setModal(false);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setQuery(search);
	};

	const handleClick = (index) => {
		getRecipe(index);
		console.log(index);
	};

	const renderRecipes = () => {
		return recipes.map((recipe, index) => {
      return <Recipes 
        key={index} 
        recipe={recipe} 
        label={recipe.label} 
        image={recipe.image} 
        source={recipe.source} 
        onClick={(e) => handleClick(e.target.index)} 
        />;
		});
	};

	const getRecipe = (blankRecipe) => {
		return (
      <Recipe 
        recipe={blankRecipe} 
        label={blankRecipe.label} 
        image={blankRecipe.image} 
        yield={blankRecipe.yield} 
        totalTime={blankRecipe.totalTime} 
        />);
  };
  
  const getIngredients = () => {
    return (
      <List 
        ingredient={blankRecipe.ingredientLines}

      />

    )
  }

	// const renderRecipe = () => {
	// 		return recipe;
	// };

	return (
		<Router>
			<div className="container-fluid">
				

				<Switch>
					<Route path="/login">
						<Login 
							showModal={showModal}
						/>
						<Signup 
							modal={modal}
							hideModal={hideModal}
						/>
					</Route>

					<Route path="/recipes">
          			<Header />
						<div className="app-container">
							<div id="header-div" className="row d-flex justify-content-center text-center">
								<div id="middle-main-div" className="col-md-6 m-4">
									<Search search={search} handleChange={handleChange} handleSubmit={handleSubmit} />
								</div>
							</div>

							<div id="header-div" className="row d-flex justify-content-center text-center">
								<div id="title-main-div" className="col-md-3">
									<h1 id="rech1">Recipes</h1>
								</div>
								<div id="title-main-div" className="col-md-6">
									<h1>Middle</h1>
								</div>
								<div id="title-main-div" className="col-md-3">
									<h1 id="ingH1">Ingredients</h1>
								</div>
							</div>

							<div id="main-row" className="row d-flex justify-content-center text-center">
								<div id="recipes-div" className="col-md-3">
									{loading ? <h1>Recipes Go Here</h1> : renderRecipes()}
								</div>

								<div id="middle-div" className="col-md-6">
									{loading ? <h1>Recipes Go Here</h1> : getRecipe(blankRecipe)}
								</div>

								<div id="ingredients-div" className="col-md-3">
									<div className="ing-border">
										<Ingredients />
									</div>
								</div>
							</div>
						</div>
					</Route>

					<Route path="/favorites">
          <Header />
            <User/>
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
