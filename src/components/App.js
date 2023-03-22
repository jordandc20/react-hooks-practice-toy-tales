import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(resp => resp.json())
      .then(data => setToys(data))
  }, [])

  function addNewToy(newToy) {
    const addConfigObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToy)
    }
    fetch('http://localhost:3001/toys', addConfigObj)
      .then(resp => resp.json())
      .then(data => {
        setToys([...toys, data])
      })
  }

  function handleDonate(donatedToyId) {
    setToys(
      toys.filter(toy => toy.id !== donatedToyId)
    )
  }

  function handleLike(likedToy) {
    const udToys = toys.map(toy => {
      if (toy.id === likedToy.id) {
        return {
          ...toy,
          likes: likedToy.likes
        }
      } else {
        return toy
      }
    })
    setToys(udToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onFormSubmit={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDonate={handleDonate} onLike={handleLike} />
    </>
  );
}

export default App;
