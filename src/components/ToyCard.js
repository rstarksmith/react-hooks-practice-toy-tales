import React from "react";

function ToyCard({ toy, handleToyDelete, updateToy }) {
  const { name, image, likes, id } = toy

  const handleDelete = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(resp => handleToyDelete(id))
  }

  const handleLikes = () => {
    const newLike = {
      likes: toy.likes + 1,
    }
    console.log(newLike)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLike)
    })
    .then(resp => resp.json())
    .then(updateToy)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
