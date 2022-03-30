
import React, { useState,useEffect } from 'react';
import './App.css';
import PetContainer from './Components/PetContainer'
import { useSelector,useDispatch } from 'react-redux';
import {selectUrls,removeAll} from './Components/urlSlice'

function App() {
  const [pets,setPets] = useState([])
  const selectedurls = useSelector(selectUrls)
  const dispatch = useDispatch();
  const [search,setSearch] = useState('')
  const [displayedPets,setDisplay] = useState([])
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
      setDisplay(temp)
      }
      ) 
  }
  const searchPets = () => {
    if(!search)
    {
      clearSelection()
      dispatch(removeAll())
      setDisplay(pets)
      setSearch('')
      return
    }
    clearSelection()
    dispatch(removeAll())
    let temp = pets.filter(pet=>pet.title.toLowerCase().includes(search.toLowerCase().trim())||pet.description.toLowerCase().includes(search.toLowerCase().trim()))
    setDisplay(temp)
    setSearch('')
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
  const downloadSelected = async () => {
    var temp = document.createElement("a")

    document.body.appendChild(temp)
    for(let url in selectedurls)
    {
     let image = await fetch(selectedurls[url])
     let blob = await image.blob()
     let imageURL = URL.createObjectURL(blob)
     temp.setAttribute("href",imageURL)
     temp.setAttribute("download",`${url}.jpeg`)
     temp.click()
    }
    temp.remove()
  }
  useEffect(()=>fetchPets(),[])

var display = displayedPets.map(element => <PetContainer data={element}/>)
var displayUrls = ''
for(let url in selectedurls)
{
  displayUrls += selectedurls[url];
}
  return (
    <>
    <h1>Eulerity Pets</h1>
    <p>{displayUrls}</p>
    <form onSubmit={event=>{event.preventDefault();searchPets()}}>
          <label>Search for pets: </label>
          <input onChange={(event)=>setSearch(event.target.value)} name="petInput" value={search}></input>
          <input type="submit" value="SUBMIT"></input>
    </form>
    <button onClick={selectAll}>SELECT ALL</button>
    <button onClick={clearSelection}>CLEAR SELECTION</button>
    <button onClick={downloadSelected}>DOWNLOAD SELECTION</button>
    <div className="pets">
    {display}
    </div>
    </>
  );
}

export default App;

