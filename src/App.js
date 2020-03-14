import React, { useEffect, useState } from "react";
import Recipe from "./compoents/Recipe";
import "./App.css";

const App = _ => {
  // const APP_ID = "ffe426ff";
  // const APP_KEY = "428e44b94812d8560d2f1237a2a178dd";
  const APP_KEY = "1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("margarita");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      // `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      `https://www.thecocktaildb.com/api/json/v1/${APP_KEY}/search.php?s=${query}`
    );
    const data = await response.json();
    setRecipes(data.drinks);
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

  console.log(recipes);

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
  } else if (recipes) {
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
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe
              // key={recipe.recipe.label}
              title={recipe.strDrink}
              img={recipe.strDrinkThumb}
              glass={recipe.strGlass}
              instructions={recipe.strInstructions}
              ingredient1={recipe.strIngredient1}
              ingredient2={recipe.strIngredient2}
              ingredient3={recipe.strIngredient3}
              ingredient4={recipe.strIngredient4}
              ingredient5={recipe.strIngredient5}
              ingredient6={recipe.strIngredient6}
              ingredient7={recipe.strIngredient7}
              ingredient8={recipe.strIngredient8}
              // calories={recipe.recipe.calories}
              // image={recipe.recipe.image}
              // ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
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
