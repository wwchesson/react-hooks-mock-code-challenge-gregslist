import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listings) => setListings(listings));
  }, []);

  function handleDelete(deletedListing) {
    const listingToDelete = listings.filter(
      (listing) => listing.id !== deletedListing.id
    );
    setListings(listingToDelete);
  }

  const listingsToDisplay = listings.filter((listing) =>
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header onSearch={setSearchTerm} />
      <ListingsContainer
        listings={listingsToDisplay}
        onDeleteListing={handleDelete}
      />
    </div>
  );
}

export default App;
