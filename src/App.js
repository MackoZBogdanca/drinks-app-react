import React, { useEffect, useState } from "react";
import Drink from "./compoents/Drink";
import "./App.css";

const App = _ => {
  // const APP_ID = "ffe426ff";
  // const APP_KEY = "428e44b94812d8560d2f1237a2a178dd";
  const APP_KEY = "1";

  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("margarita");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDrinks();
  }, [query]);

  const getDrinks = async () => {
    const response = await fetch(
      // `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      `https://www.thecocktaildb.com/api/json/v1/${APP_KEY}/search.php?s=${query}`
    );
    const data = await response.json();
    setDrinks(data.drinks);
    setLoading(false);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  // console.log(drinks);
  // console.log(drinks.idDrink);

  if (loading) {
    return (
      <div className="app">
        <h1 className="title">Search drinks app</h1>
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Search by name or main ingredient"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <h1 className="error">Loading...</h1>
      </div>
    );
  } else if (drinks) {
    return (
      <div className="app">
        <h1 className="title">Search drinks app</h1>
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Search by name or main ingredient"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        {/* <div className="drinks"> */}
        {/* {drinks.map(drink => ( */}
        <Drink
          drinks={drinks}
          // id={drink.idDrink}
          // title={drink.strDrink}
          // img={drink.strDrinkThumb}
          // glass={drink.strGlass}
          // instructions={drink.strInstructions}
          // ingredient1={drink.strIngredient1}
          // ingredient2={drink.strIngredient2}
          // ingredient3={drink.strIngredient3}
          // ingredient4={drink.strIngredient4}
          // ingredient5={drink.strIngredient5}
          // ingredient6={drink.strIngredient6}
          // ingredient7={drink.strIngredient7}
          // ingredient8={drink.strIngredient8}
        />
        {/* // ))} */}
        {/* </div> */}
      </div>
    );
  } else {
    return (
      <div className="app">
        <h1 className="title">Search drinks app</h1>
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Search by name or main ingredient"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <h1 className="error">No results, try again...</h1>
      </div>
    );
  }
};

export default App;
