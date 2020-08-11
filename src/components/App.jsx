import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Footer from './Footer';
import Recipes from './Recipes';
import Recipe from './Recipe';
import Ingredients from './Ingredients';

function App() {
  return (
    <div className="App container">

      <div className="row">
        <Header/>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Recipes/>
        </div>
        <div className="col-md-6">
          <Recipe />
        </div>
        <div className="col-md-3">
          <Ingredients/>
        </div>
      </div>

      <div className="row">
        <Footer/>
      </div>
    </div>
  );
}

export default App;

// this is a test