import React,{useEffect, useState} from 'react';
import Cards from '../components/Cards/Cards';

require('dotenv').config();

const App = (props) =>{
  //API Declaration 
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;
  //State variable declaration
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');
  
  useEffect(() =>{
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

  //OUTPUT
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" 
        value={search} 
        onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipesContainer">
        {recipes.map(recipe => (
            <Cards
                key={recipe.recipe.label+recipe.recipe.calories}
                input={recipe}
            />
        ))}
      </div>
    </div>
  )
}


export default App;
