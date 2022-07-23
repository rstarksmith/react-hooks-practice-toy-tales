import React, { useState } from "react";

function ToyForm({  addNewToy }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const handleAddToy = (e) => {
    e.preventDefault()
    const newToy = {
      name, 
      image
    }
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newToy)
    })
    .then(resp => resp.json())
    .then(newToy => {
      addNewToy(newToy)
      setName('')
      setImage('')
    })
  }
  

  return (
    <div className="container">
      <form onSubmit={handleAddToy} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          value={name}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={(e) => setImage(e.target.value)}
          type="text"
          name="image"
          value={image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
