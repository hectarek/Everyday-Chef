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

const backendAPI = "https://everydaychef-api.herokuapp.com/recipes?q=";
const proxy = "https://cors-anywhere.herokuapp.com/";

const blankRecipe = {
  id: null,
  uri:
    "http://www.edamam.com/ontologies/edamam.owl#recipe_6c6b5baf220ceb5b25b7c9695f91046e",
  recipeId: "6c6b5baf220ceb5b25b7c9695f91046e",
  label: "Crisp Tacos Picadillo",
  image:
    "https://www.edamam.com/web-img/32d/32da8c201c42d8aae7a7f51449c83e2a.jpg",
  source: "Lottie + Doof",
  url: "http://www.lottieanddoof.com/2009/07/picadillo/",
  yield: 14.0,
  totalTime: 4.0,
  ingredientLines: [
    "2 tsp Vegetable Oil (picadillo)",
    "1/2 x white onion (large), chopped (1 1/2 cups) (picadillo)",
    "1 lb Ground Chuck (80 percent lean) (picadillo)",
    "1 tbsp minced garlic cloves(1 to 2 cloves) (picadillo)",
    "2 x tomatoes (medium), diced (2 3/4 cups) (picadillo)",
    "1 1/2 tsp Paprika (picadillo)",
    "1 tsp ancho chile powder (picadillo)",
    "1 tsp Dried Oregano (picadillo)",
    "1 tsp coarse salt (picadillo)",
    "1 tsp freshly ground pepper (picadillo)",
    "3/4 tsp Ground Cumin (picadillo)",
    "1 1/2 cup water (picadillo)",
    "3 tsp White Vinegar (picadillo)",
    "vegetable oil for frying (tacos)",
    "20 x Corn Tortillas (tacos)",
    "Iceberg Lettuce Shredded,for serving (tacos)",
    "white onion shredded,for serving (tacos)",
    "shredded cheddar cheese (tacos)",
    "salsa Picante, for serving (tacos)",
  ],
};

function useRecipe(query) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      try {
        setLoading(true);
        let response = await fetch(`${proxy}${backendAPI}${query}`);
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
  // Other
  const [modal, setModal] = useState(false);

  // Event Handlers
  const handleChange = (e) => {
    setSearch(e.target.value);
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
    console.log(selectedRecipe);
  };

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

  const getRecipe = (recipe) => {
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

  const getIngredientsList = (ingredientsList) => {
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

  const getEndList = (recipe) => {
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
          count = eval(arrIng[0].replace("-", "+"));
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
            <Login showModal={showModal} />
            <Signup modal={modal} hideModal={hideModal} />
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

              <div className="row text-center justify-content-md-center">
                <div className="col-md-3 m-2 p-2">
                  <h1 className="recipes__heading">Recipes</h1>
                  <hr></hr>
                </div>
                <div className="col-md-5 m-2 p-2">
                  <h1 className="middle__heading">Your Recipe</h1>
                  <hr></hr>
                </div>
                <div className="col-md-3 m-2 p-2">
                  <h1 className="ingredient__heading">Ingredients</h1>
                  <hr></hr>
                </div>
              </div>

              <div className="row text-center justify-content-md-center">
                <div className="col-md-3 m-2 p-2 recipes-div">
                  {loading ? <h1>Loading...</h1> : renderRecipes()}
                </div>

                <div className="col-md-5 m-2 p-2 middle-div justify-content-md-center">
                  {selected ? getRecipe(recipe) : <h1>Loading...</h1>}
                  {selected ? (
                    getIngredientsList(recipe.ingredientLines)
                  ) : (
                    <h1>Loading...</h1>
                  )}
                  {selected ? getEndList(recipe) : <h1>Loading...</h1>}
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

export default App;
