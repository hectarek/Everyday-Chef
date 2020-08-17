// Basic Imports
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Component Imports
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import List from "./List";
import User from "./User";

//Style Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/App.css";
import "../style/Login.css";
import "../style/Favorites.css";

//Dependency Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

function Favorites() {
  return (
    <Router>
      <div className="container-fluid">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/recipes">
            <Header />
            <div className="app-container">
              <div
                id="header-div"
                className="row d-flex justify-content-center text-center"
              >
                <div id="middle-main-div" className="col-md-6 m-4">
                  <Search
                    search={search}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                  />
                </div>
              </div>

              <div
                id="header-div"
                className="row d-flex justify-content-center text-center"
              >
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

              <div
                id="main-row"
                className="row d-flex justify-content-center text-center"
              >
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
            <User />
          </Route>
        </Switch>

        <div
          id="footer-div"
          className="row d-flex justify-content-center text-center"
        >
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default Favorites;
