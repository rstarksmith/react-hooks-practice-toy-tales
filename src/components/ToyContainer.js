import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleToyDelete, updateToy }) {
  const renderToys = toys.map(toy => <ToyCard key={toy.id} updateToy={updateToy} handleToyDelete={handleToyDelete}
    toy={toy} />)

  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
