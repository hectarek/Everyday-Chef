import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../style/Header.css";
import { Icon, InlineIcon } from "@iconify/react";
import chefHat from "@iconify/icons-mdi/chef-hat";

function Header({ search, handleChange, handleSubmit }) {  

  return (
    <div className="header">
      <div className="icons">
        {/*<i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram-square"></i> */}
        {/* <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2x" />
        <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
        <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" /> */}
      </div>
      <div className="head text-center">
        <a href="url">
          <h1 id="logo">
            <span id="hat">
              <Icon icon={chefHat} />
            </span>
            <br></br>
            Everyday <span id="chef-red">Chef</span>
          </h1>
        </a>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
        >
          <input 
            type="text" 
            value={search}
            onChange={handleChange}
            placeholder="Search a Dish!" />
        </form>
      </div>
    </div>
  );
}

export default Header;
