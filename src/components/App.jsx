// Basic Imports
import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory, withRouter } from "react-router-dom";
import axios from 'axios';

//Component Imports
import Header from "./Header";
import Footer from "./Footer";
import Recipes from "./Recipes";
import Recipe from "./Recipe";
import Search from "./Search";
import Ingredients from "./Ingredients";
import Login from "./Login";
import List from "./List";
import User from "./User";
import Signup from "./Signup";
import Favorites from "./Favorites";
import ListTag from "./ListTag";
import FavoritesTile from "./FavoritesTile";


//Import Functions
import { formatCount, parseIngredients } from '../script/logic';

//Style Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/App.css";

//Dependency Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";


//  =========== Beginning of Code ===========

library.add(fab, fas);

const recipesApiCall = "https://everydaychef-api.herokuapp.com/recipes?q=";
const usersApiCall = "https://everydaychef-api.herokuapp.com/signup";
const loginApiCall = "https://everydaychef-api.herokuapp.com/login";
const favoriteCall = "https://everydaychef-api.herokuapp.com/favorites";
const proxy = "https://cors-anywhere.herokuapp.com/";

function useRecipe(query) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      try {
        setLoading(true);
        let response = await fetch(`${proxy}${recipesApiCall}${query}`);
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

const parseUser = () => {

	let data = sessionStorage.getItem('user');
	console.log(data);

	let parsedUser = JSON.parse(data);
	console.log(parsedUser);

	return parsedUser;
}

function App() {

	// APP STATE

	// State from the Query
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("");
	const [recipes, loading] = useRecipe(query);

	// State for selecting Recipe
	const [recipe, setRecipe] = useState("");
	const [selected, setSelected] = useState(false);
	const [active, setActive] = useState(false);

	// State for adding to Cart
	const [addedToCart, setAddedToCart] = useState(false);
	const [cart, setCart] = useState([])

	// User Sign up 
	const [userSignUp, setUserSignUp] = useReducer(
		(state, newState) => ({...state, ...newState}),
		{
			firstName: '',
			lastName: '',
			userName: '',
			email: '',
			password: ''
	});

	const [isSignedUp, setIsSignedUp] = useState(false);

	// User Login 
	const [userLogin, setUserLogin] = useReducer(
		(state, newState) => ({...state, ...newState}),
		{
			userName: '',
			password: ''
		});

	const [favorites, setFavorites] = useState([])
	
	// Other
	const [modal, setModal] = useState(false);


	// APP Event Handlers
	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const handleChangeSignup = (e) => {

		const input = e.target.name;
		const newValue = e.target.value;

		setUserSignUp({[input]: newValue});
	};

	const handleChangeLogin = (e) => {

		const input = e.target.name;
		const newValue = e.target.value;

		setUserLogin({[input]: newValue});
	}

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

	const handleClick = (e, selectedRecipe) => {
		setRecipe(selectedRecipe);
		setSelected(true);

		if (active) {
			// e.target.ClassName = 'recipes active';
			setActive(false)
		} else {
			// e.target.className = 'recipes';
			setActive(true);
		}
	}

	// API End point calls

	const handleSignupSubmission = (e) => {
	
		e.preventDefault();

		axios({
			method: 'post',
			url: `${proxy}${usersApiCall}`,
			data: {
				firstName: userSignUp.firstName,
				lastName: userSignUp.lastName,
				userName: userSignUp.userName,
				email: userSignUp.email,
				password: userSignUp.password
			}
		})
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			alert("Invalid recipe search, please try again.")
			console.log(error);
		})	
	}

	const handleSubmitLogin = (e) => {
		e.preventDefault();

		axios({
			method: 'post',
			url: `${proxy}${loginApiCall}`,
			data: {
				userName: userLogin.userName,
				password: userLogin.password
			}
		})
		.then(response => {
			console.log(response);
			let user = response.data.user;
			let status = response.status;
			console.log(status);
			console.log(user);

			sessionStorage.setItem("user", JSON.stringify(user));

			if (status === 200) {

			} else {
				alert("Your username or password is incorrect")
			}
		})
		.catch(error => {
			console.log(error);
		})
	}

	const handleRecipeFavorite = () => {

		let user = parseUser();
		console.log(user);

		const input = recipe.label;
		const newValue = recipe;

		setFavorites({[input]: newValue});

		axios({
			method: 'post',
			url: `${proxy}${favoriteCall}`,
			data: {
				userId: user.id,
				recipe: recipe
			}
		})
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		})
	}

	// GET Methods

	const getAddedToCart = () => {
		addToShoppingCart(recipe);
		setAddedToCart(true);
	}
	
	// Render methods
	const renderRecipes = () => {
		return recipes.map((recipe, index) => {
			return (
				<Recipes 
					key={index}
					recipe={recipe}
					active={active}
					recipeId={recipe.recipeId} 
					label={recipe.label} 
					image={recipe.image} 
					source={recipe.source} 
					handleClick={handleClick}
				/>)
		});
	};

	const renderRecipe = (recipe) => {
		return (
		<Recipe 
			recipe={recipe} 
			label={recipe.label} 
			image={recipe.image} 
			yield={recipe.yield} 
			totalTime={recipe.totalTime} 
			handleRecipeFavorite={handleRecipeFavorite}
		/>);
  	};

  	const renderIngredientsList = (ingredientsList) => {
	
		const newIngredients = parseIngredients(ingredientsList);

		return newIngredients.map((ingredient, index) => {
			return (
				<List 
					key={index}
					ingredients={ingredient}
					count={ingredient.count}
					unit={ingredient.unit}
					ingredient={ingredient.ingredient}
					url={ingredient.url}
					formatCount={formatCount}
				/>)
		})
  	}

  const renderListTag = (recipe) => {
    return (
      <ListTag
        recipe={recipe}
        url={recipe.url}
        source={recipe.source}
        addedToCart={getAddedToCart}
      />
    );
  };

  const addToShoppingCart = (recipe) => {
    const ingredientsList = parseIngredients(recipe.ingredientLines);

    return ingredientsList.forEach((ingredient) => {
      setCart((item) => [...item, ingredient]);
    });
  };

  const renderShoppingCart = () => {
    return cart.map((item, index) => {
      return (
        <Ingredients
          key={index}
          item={item}
          count={item.count}
          unit={item.unit}
          ingredient={item.ingredient}
        />
      );
    });
  };

  const renderLoader = () => {
	  return (
		<div className="loader my-5"><div></div><div></div><div></div><div></div></div>
	  )
  }

  const renderFavorites = () => {
	  return favorites.map((recipe, index) => {
		return (
			<FavoritesTile
				key={index}
				recipe={recipe}
				image={recipe.image}
				label={recipe.label} 
			/>)
	  	}  
	  )
  }
  
	return (
		<Router>
			<div className="container-fluid">
				
				<Switch>

					<Route path="/login">
						<Login 
							showModal={showModal}
							user={userLogin}
							handleChangeLogin={handleChangeLogin}
							handleSubmitLogin={handleSubmitLogin}
						/>
						<Signup 
							modal={modal}
							newUser={userSignUp}
							handleChangeSignup={handleChangeSignup}
							handleSignupSubmission={handleSignupSubmission}
							hideModal={hideModal}
						/>
					</Route>

					<Route path="/user">
						<Header />
						<User />
					</Route>

					<Route path="/recipes">
          			<Header />
						<div className="app-container">
							<div className="row mt-4 justify-content-md-center">
								<Search search={search} handleChange={handleChange} handleSubmit={handleSubmit} />
							</div>

							<div className="row text-center justify-content-md-center">
								<div className="col-md-3 m-2 p-2">
									<h1 className="recipes__heading">Recipes</h1>
								</div>
								<div className="col-md-5 m-2 p-2">
									<h1 className="middle__heading">Your Recipe</h1>
								</div>
								<div className="col-md-3 m-2 p-2">
									<h1 className="ingredient__heading">Ingredients</h1>
								</div>
							</div>

							<div className="row text-center justify-content-md-center">
								<div className="col-md-3 m-2 p-2 recipes-div">
									{loading ? renderLoader() : renderRecipes()}
								</div>

								<div className="col-md-5 m-2 p-2 middle-div justify-content-md-center">
									{selected ? renderRecipe(recipe) : '' } 
									{selected ? renderIngredientsList(recipe.ingredientLines) : ''}
									{selected ? renderListTag(recipe) : ''}
								</div>

								<div className="col-md-3 m-2 p-2 ingredients-div">
									<div>
									{addedToCart ? renderShoppingCart() : '' }
									</div>
								</div>
							</div>
						</div>
					</Route>

					<Route path="/favorites">
						<Header />
						<Favorites
							render={renderFavorites}
						/>
					</Route>

					<Route path="/">
						<Redirect to="/login" />
					</Route>

				</Switch>

				<div className="row d-flex justify-content-center text-center footer-div">
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default App;



