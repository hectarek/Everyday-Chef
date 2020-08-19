// Basic Imports
import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

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

//Style Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/App.css";

//Dependency Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Fraction } from "fractional";

//  =========== Beginning of Code ===========

library.add(fab, fas);

const recipesApiCall = "https://everydaychef-api.herokuapp.com/recipes?q=";
const usersApiCall = "https://everydaychef-api.herokuapp.com/signup";
const loginApiCall = "https://everydaychef-api.herokuapp.com/login";
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

export default function App() {
  // APP STATE

  // State from the Query
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [recipes, loading] = useRecipe(query);

  // State for selecting Recipe
  const [recipe, setRecipe] = useState("");
  const [selected, setSelected] = useState(false);

  // State for adding to Cart
  const [addedToCart, setAddedToCart] = useState(false);
  const [cart, setCart] = useState([]);

  // User Sign up
  const [userSignUp, setUserSignUp] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    }
  );

  const [isSignedUp, setIsSignedUp] = useState(false);

  // User Login
  const [userLogin, setUserLogin] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      userName: "",
      password: "",
    }
  );

  // Other
  const [modal, setModal] = useState(false);

  // APP Event Handlers
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleChangeSignup = (e) => {
    const input = e.target.name;
    const newValue = e.target.value;

    setUserSignUp({ [input]: newValue });
  };

  const handleChangeLogin = (e) => {
    const input = e.target.name;
    const newValue = e.target.value;

    setUserLogin({ [input]: newValue });
  };

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const handleClick = (selectedRecipe) => {
    setRecipe(selectedRecipe);
    setSelected(true);
  };

  // API End point calls

  const handleSignupSubmission = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${proxy}${usersApiCall}`,
      data: {
        firstName: userSignUp.firstName,
        lastName: userSignUp.lastName,
        userName: userSignUp.userName,
        email: userSignUp.email,
        password: userSignUp.password,
      },
    }).then((response) => {
      console.log(response);
    });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${proxy}${loginApiCall}`,
      data: {
        userName: userLogin.userName,
        password: userLogin.password,
      },
    }).then((response) => {
      console.log(response);
    });
  };

  // GET Methods

  const getAddedToCart = () => {
    addToShoppingCart(recipe);
    setAddedToCart(true);
  };

  // Render methods
  const renderRecipes = () => {
    return recipes.map((recipe, index) => {
      return (
        <Recipes
          key={index}
          recipe={recipe}
          recipeId={recipe.recipeId}
          label={recipe.label}
          image={recipe.image}
          source={recipe.source}
          handleClick={handleClick}
        />
      );
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
      />
    );
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
        />
      );
    });
  };

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

  const formatCount = (count) => {
    if (count) {
      // count  = 2.5;
      const newCount = Math.round(count * 10000) / 10000;
      const [int, dec] = newCount
        .toString()
        .split(".")
        .map((el) => parseInt(el, 10));

      if (!dec) return newCount;

      if (int === 0) {
        const fr = new Fraction(newCount);
        return `${fr.numerator}/${fr.denominator}`;
      } else {
        const fr = new Fraction(newCount - int);
        return `${int} ${fr.numerator}/${fr.denominator}`;
      }
    }
    return "?";
  };

  const parseIngredients = (ingredients) => {
    const unitLong = [
      "tablespoons",
      "tablespoon",
      "ounces",
      "ounce",
      "teaspoons",
      "teaspoon",
      "cups",
      "pounds",
    ];
    const unitShort = [
      "tbsp",
      "tbsp",
      "oz",
      "oz",
      "tsp",
      "tsp",
      "cup",
      "pound",
    ];
    const units = [...unitShort, "kg", "g"];

    const newIngredients = ingredients.map((el) => {
      // 1. Uniform Units
      let ingredient = el.toLowerCase();
      unitLong.forEach((unit, i) => {
        ingredient = ingredient.replace(unit, unitShort[i]);
      });

      // 2. Remove Parentheses
      ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

      // 3. Parse ingredients into count, unit and ingredient.
      const arrIng = ingredient.split(" ");
      const unitIndex = arrIng.findIndex((el2) => units.includes(el2));

      let objIng;

      if (unitIndex > -1) {
        // There is a unit
        // Ex. 4 1/2 cups, arrCount is [4, 1/2] --> eval("4+1/2") --> 4.5
        // Ex. 4 cups, arrCount is [4]

        const arrCount = arrIng.slice(0, unitIndex); // example 4 1/2 = [4, 1/2] --> eval(4+1/2) = 4.5

        let count;
        if (arrCount.length === 1) {
          // Edge case, ex. 1-1/3 cup, replaces the '-' so with '+' so eval works.
          // count = eval(arrIng[0].replace('-', '+'));
        } else {
          // Evaluating so that it turns the array into decimal
          // count = eval(arrIng.slice(0, unitIndex).join('+'));
        }

        // Final object to return the correct
        objIng = {
          count: count,
          unit: arrIng[unitIndex],
          ingredient: arrIng.slice(unitIndex + 1).join(" "),
        };
      } else if (parseInt(arrIng[0], 10)) {
        // There is NO unit, but 1st element is a number
        objIng = {
          count: parseInt(arrIng[0], 10),
          unit: "",
          ingredient: arrIng.slice(1).join(" "),
        };
      } else if (unitIndex === -1) {
        // There is no unit and no number in the first position
        objIng = {
          count: 1,
          unit: "",
          ingredient: ingredient,
        };
      }

      return objIng;
    });
    ingredients = newIngredients;
    return ingredients;
  };

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
                <Search
                  search={search}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              </div>

              <div className="row text-center justify-content-md-center inner-row">
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
                  {loading ? <h1>Loading...</h1> : renderRecipes()}
                </div>

                <div className="col-md-5 m-2 p-2 middle-div justify-content-md-center">
                  {selected ? renderRecipe(recipe) : <h1>Loading...</h1>}
                  {selected ? (
                    renderIngredientsList(recipe.ingredientLines)
                  ) : (
                    <h1>Loading...</h1>
                  )}
                  {selected ? renderListTag(recipe) : <h1>Loading...</h1>}
                </div>

                <div className="col-md-3 m-2 p-2 ingredients-div">
                  <div>
                    {addedToCart ? (
                      renderShoppingCart()
                    ) : (
                      <h1>Items will go here</h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Route>

          <Route path="/favorites">
            <Header />
            <Favorites />
          </Route>
        </Switch>

        <div className="row d-flex justify-content-center text-center footer-div">
          <Footer />
        </div>
      </div>
    </Router>
  );
}
