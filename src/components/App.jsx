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

import { Icon, InlineIcon } from "@iconify/react";
import chefHat from "@iconify/icons-mdi/chef-hat";

// // npm install --save-dev @iconify/react @iconify/icons-clarity
// import { Icon, InlineIcon } from "@iconify/react";
import heartSolid from "@iconify/icons-clarity/heart-solid";

library.add(fab, fas);

function App() {
  return (
    <div className="app-container">
      <div
        id="header-div"
        className="row d-flex justify-content-center text-center"
      >
        <div
          id="favorites-div"
          className="col-md-3 position-relative container-fluid"
        >
          <h1 id="favorites-h1">
            <a href="url">
              <Icon icon={chefHat} />
              <br></br>
              Login
            </a>
          </h1>
          {/* <hr></hr> */}
        </div>

        <div
          id="middle-main-div"
          className="col-md-6 position-relative container-fluid"
        >
          <Header />
        </div>

        <div
          id="login-div"
          className="col-md-3 position-relative container-fluid"
        >
          <h1 id="favorites-h1">
            <a href="url">
              <Icon icon={heartSolid} /> <br></br>
              Favorites
            </a>
          </h1>

          {/* <hr></hr> */}
        </div>
      </div>

      <div
        id="main-row"
        className="row d-flex justify-content-center text-center"
      >
        <div
          id="recipes-div"
          className="col-md-3 position-relative container-fluid"
        >
          <h1 id="rech1">Recipes</h1>
          <hr></hr>

          <Recipes />
        </div>
        <div
          id="middle-div"
          className="col-md-6 position-relative container-fluid"
        >
          {/* <h1>Middle</h1> */}
          <Recipe />
        </div>
        <div
          id="ingredients-div"
          className="col-md-3 position-relative container-fluid"
        >
          <h1 id="ingH1">Ingredients</h1> <hr></hr>
          <div class="ing-border">
            <Ingredients />
          </div>
        </div>
      </div>
      <div
        id="footer-div"
        className="row d-flex justify-content-center text-center"
      >
        {/* <h1>Footer</h1> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;

// this is a third test

// login / user / signup
