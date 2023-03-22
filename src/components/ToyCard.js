import React from "react";

function ToyCard({ id, image, likes, name, onDonate, onLike }) {

  const handleDonateClick = () => {
    const deleteConfigObj = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
    fetch(`http://localhost:3001/toys/${id}`, deleteConfigObj)
      .then(resp => resp.json())
      .then(onDonate(id))
  }


  const handleLikeClick = () => {
    const likeConfigObj = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: likes + 1 })
    }
    fetch(`http://localhost:3001/toys/${id}`, likeConfigObj)
      .then(resp => resp.json())
      .then(data => onLike(data))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img className="toy-avatar"
        src={image}
        alt={name}
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonateClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
