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
library.add(fab, fas);

function App() {
  return (
    <div className="App container">

      <div className="row">
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
