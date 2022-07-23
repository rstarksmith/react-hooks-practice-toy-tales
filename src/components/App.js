import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(resp => resp.json())
    .then(resp => setToys(resp))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const addNewToy = (newToy) => {
    setToys([...toys, newToy])
  }

  const handleToyDelete = (id) => {
    const deletedToys = toys.filter(toy => toy.id !== id)
    setToys(deletedToys)
  }

  const updateToy = (updatedToy) => {
    const updatedToys = toys.map(toy => toy.id === updatedToy.id ? updatedToy : toy)
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys} 
        updateToy={updateToy}
        handleToyDelete={handleToyDelete}
      />
    </>
  );
}

export default App;
