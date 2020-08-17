// Basic Imports
import React, { useState, useEffect } from "react";

//Style Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Favorites.css";

function Favorites() {
	return (
		<div className="app-container">
			<div id="header-div" className="row d-flex justify-content-center text-center">
				<div id="middle-main-div" className="col-md-6 m-4">
					<h1>Favorites</h1>
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
				<div id="recipes-div" className="col-md-3"></div>

				<div id="middle-div" className="col-md-6"></div>

				<div id="ingredients-div" className="col-md-3">
					<div className="ing-border"></div>
				</div>
			</div>
		</div>
	);
}

export default Favorites;
