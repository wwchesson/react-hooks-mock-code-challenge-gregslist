import React, {useState} from "react";

function Search({onSearch}) {
  const [search, setSearch] = useState("")
  //need a second search-related state variable in the search file in order to set the value of 
  //what is typed into the search bar. The first search-related state variable was used to set which
  //listings to display.


  function handleSubmit(e) {
    e.preventDefault();
    onSearch(search)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
