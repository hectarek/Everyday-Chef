<<<<<<< HEAD
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import "../style/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Recipes from "./Recipes";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";
=======
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Footer from './Footer';
import Recipes from './Recipes';
import Recipe from './Recipe';
import Ingredients from './Ingredients';
>>>>>>> footer
library.add(fab, fas);

function App() {
  return (
<<<<<<< HEAD
    <div className="app-container">
      <div
        id="header-div"
        className="row d-flex justify-content-center text-center"
      >
        <Header />
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
=======
    <div className="App container">

      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-md-3">
>>>>>>> footer
          <Recipes />
        </div>
        <div
          id="middle-div"
          className="col-md-3 position-relative container-fluid"
        >
          <h1>Middle</h1>
          <Recipe />
        </div>
        <div
          id="ingredients-div"
          className="col-md-3 position-relative container-fluid"
        >
          <h1>Ingredients</h1>
          <Ingredients />
        </div>
      </div>
<<<<<<< HEAD
      <div
        id="footer-div"
        className="row d-flex justify-content-center text-center"
      >
        <h1>Footer</h1>
=======
      <div id="footer-div" className="row">
>>>>>>> footer
        <Footer />
      </div>
    </div>
  );
}

export default App;

// this is a second test
