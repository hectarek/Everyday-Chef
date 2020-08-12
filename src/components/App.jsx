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
        <div className="col-md-3">
          <Recipes />
        </div>
        <div className="col-md-6">
          <Recipe />
        </div>
        <div className="col-md-3">
          <Ingredients />
        </div>
      </div>

      <div className="row">
        <Footer />
      </div>
    </div>


  );
}

export default App;

// this is a test