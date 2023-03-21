import React from "react";

function ToyCard({ id, image, likes, name, onDonate,onLike }) {


  return (
    <div className="card">
      <h2>{name}</h2>
      <img className="toy-avatar"
        src={image}
        alt={name}
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={() => onLike(id,likes)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => onDonate(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
