
import React, { useState,useEffect } from 'react';
import './App.css';
import PetContainer from './Components/PetContainer'
function App() {
  const [pets,setPets] = useState([])
  var selectedPets;

  const fetchPets = () => {
    fetch('http://eulerity-hackathon.appspot.com/pets').then(
      result=>result.json()).then(data=>
      {
      let temp = []
      for(let element of data)
      {
        temp.push(element);
      }
      setPets(temp)
      }
      ) 
  }
  const clearSelection = () => {
    let arr = document.getElementsByClassName("pet")
    for(let pet of arr)
    {
      if(pet.getAttribute("data-selected")==='true')
      pet.lastChild.click();
    }
  }
  const selectAll = () => {
    let arr = document.getElementsByClassName("pet")
    for(let pet of arr)
    {
      if(pet.getAttribute("data-selected")==='false')
      pet.lastChild.click();
    }
  }
  useEffect(()=>fetchPets(),[])
var display = pets.map(element => <PetContainer data={element}/>)
  return (
    <>
    <button onClick={selectAll}>SELECT ALL</button>
    <button onClick={clearSelection}>CLEAR SELECTION</button>
    <div className="pets">
    {display}
    </div>
    </>
  );
}

export default App;

//<button onClick={clearSelection}>CLEAR SELECTION</button>