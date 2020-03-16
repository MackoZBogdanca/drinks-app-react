import React from "react";

const Search = ({ getSearch, updateSearch, search }) => {
  return (
    <div>
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
    </div>
  );
};

export default Search;
