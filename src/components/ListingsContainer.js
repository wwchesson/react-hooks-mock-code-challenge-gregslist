import React from "react";
import ListingCard from "./ListingCard"

function ListingsContainer({listings, onDeleteListing}) {
  //const displayListings = listings.map(listing => (
  //   <ListingCard key={listing.id} etc/>
  // then <ul>{displayListings} </ul> 
  // ))
  
  return (
    <main>
      <ul className="cards">{listings.map(listing => 
      <ListingCard key={listing.id} 
      image={listing.image}
      description={listing.description}
      location={listing.location}
      listing={listing}
      id={listing.id}
      onDeleteListing={onDeleteListing} />
      )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
