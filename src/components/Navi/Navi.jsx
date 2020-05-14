import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import style from './Navi.module.css';

require('dotenv').config();

function App() {
  //API Declaration 
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;
  //State variable declaration
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();

    //When [] changes, useEffect runs 
  }, [query]);

  const getRecipes = async () => {
    //Add 'await' since you do not know when the data will be coming in 
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    //JSON will standardize the data to be more readable
    const data = await response.json();
    //Get items from "hits"
    console.log(data.hits);
    setRecipes(data.hits);
  }

  //Update input string 
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  //Flow block for API request until the form is submitted 
  const getSearch = e => {
    e.preventDefault();

    setQuery(search);
    //Reset search 
    setSearch('');
  }

  return (
    <div className={style.naviWrap}>
      <nav >
        <div className={style.naviItem}>
          <h3 className={style.title}>10 Pantry Raids</h3>
        </div>
        <div className={style.navBuffer}></div>
        <div className={style.naviItem}>
          <form onSubmit={getSearch} className="search-form">
            <input className={style.searchbar} type="text"
              value={search}
              onChange={updateSearch} />
            <button className={style.searchButton} type="submit">
              Search
            </button>
          </form>
        </div>
      </nav><br />
      <div className={style.navHeightBuffer} />
      <div className={style.outputWrap}>
        <div className={style.recipesContainer}>
          {recipes.map(recipe => (
            <Cards
              key={recipe.recipe.label + recipe.recipe.calories}
              input={recipe}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
