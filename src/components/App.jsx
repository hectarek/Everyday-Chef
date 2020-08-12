import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./../style/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Recipes from "./Recipes";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";

function App() {
  return (
    <div className="app-container">
      <div id="header-div" className="row">
        <h1 id="logo">
          Everyday <span>Chef</span>
        </h1>
        <Header />
      </div>
      <div className="row">
        <div id="recipes-div" className="col-md-3">
          <h1>Recipes</h1>
          <Recipes />
        </div>
        <div id="middle-div" className="col-md-6">
          <h1>Middle</h1>
          <Recipe />
        </div>
        <div id="ingredients-div" className="col-md-3">
          <h1>Ingredients</h1>
          <Ingredients />
        </div>
      </div>
      <div id="footer-div" className="row">
        <h1>Footer</h1>
        <Footer />
      </div>
    </div>
  );
}

export default App;

// this is a test
