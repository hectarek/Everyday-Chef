import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../style/Header.css";

function useRecipe(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=ySGo48L37OkJ0cGH1zAfrGr8yobgFMQt&q=${query}&limit=10&offset=0&rating=G&lang=en`
        );
        const json = await response.json();

        setResults(
          json.data.map(item => {
            return item.images.preview.mp4;
          })
        );
      } finally {
        setLoading(false);
      }
    }

    if (query !== '') {
      fetchData();
    }
  }, [query]);

  return [results, loading];
}


function Header() {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [results, loading] = useRecipe(query);

  return (
    <div className="header">
      <div className="icons">
        {/*<i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram-square"></i> */}
        <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2x" spin />
        <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
        <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
      </div>
      <div className="head text-center">
        <h1 id="logo">
          Everyday <span>Chef</span>
        </h1>
      </div>
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            setQuery(search);
          }} >
          <input 
            type="text" 
            onChange={e => setSearch(e.target.value)}
            placeholder="Search a Dish!" />
          <button className="btn btn-primary">
            Search
            <span>
              <i className="fas fa-search"></i>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
