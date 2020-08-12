import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <div className="header">
      <div className="icons">

        {/*<i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram-square"></i> */}
        <FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x" spin />
        <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
        <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />

      </div>
      <div className="head text-center">
        <h1>Everyday Chef</h1>
      </div>
      <div>
        <form>
          <input
            type="text"
          />
          <button className="btn btn-primary">search
            <span><i className="fas fa-search"></i>
            </span></button>
        </form>

      </div>
    </div>
  );
}

export default Header;
