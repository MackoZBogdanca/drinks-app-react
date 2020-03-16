import React, { useEffect, useState } from "react";
import Drink from "./compoents/Drink";
import Search from "./compoents/Search";
import "./App.css";

const App = _ => {
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

  if (loading) {
    return (
      <div className="app">
        <Search
          getSearch={getSearch}
          updateSearch={updateSearch}
          search={search}
        />
        <h1 className="error">Loading...</h1>
      </div>
    );
  } else if (drinks) {
    return (
      <div className="app">
        <Search
          getSearch={getSearch}
          updateSearch={updateSearch}
          search={search}
        />
        <Drink drinks={drinks} />
      </div>
    );
  } else {
    return (
      <div className="app">
        <Search
          getSearch={getSearch}
          updateSearch={updateSearch}
          search={search}
        />
        <h1 className="error">No results, try again...</h1>
      </div>
    );
  }
};

export default App;
