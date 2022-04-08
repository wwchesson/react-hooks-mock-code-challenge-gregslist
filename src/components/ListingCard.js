import React, {useState} from "react";

function ListingCard({image, description, location, id, listing, onDeleteListing}) {
  const [likes, setLikes] = useState(true)

  function handleLikes () {
    setLikes(likes => !likes)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => onDeleteListing(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details" >
        {likes ? (
          <button className="emoji-button favorite active" onClick={handleLikes}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLikes}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
