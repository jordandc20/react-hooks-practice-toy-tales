import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDonate,onLike }) {

  const individualToy = toys.map(toy => (
    <ToyCard key={toy.id} {...toy} onDonate={onDonate} onLike={onLike} />
  ))

  return (
    <div id="toy-collection">
      {individualToy}
    </div>
  );
}

export default ToyContainer;
