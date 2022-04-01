import React, { useState,useEffect } from 'react';
import './App.css';
import PetContainer from './Components/PetContainer'
import { useSelector,useDispatch } from 'react-redux';
import {selectUrls,removeAll} from './Components/urlSlice'
import styled from 'styled-components';
import { Link } from "react-router-dom";

function PetPage() {
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

const Button = styled.button`
color: black;
font-weight: bold;
font-size: 1em;
margin: .2em;
padding: 0.25em .25em;
border: 2px solid black;
border-radius: .3em;
background-color:white;
:hover{transition-duration: .2s;
  transform: scale(1.05);}
`
const SButton = styled(Button)`
  font-size: 1.2em;
  padding: 0.25em 1em;
  border: 3px solid black;
`
const DButton = styled(SButton)`
  font-size: 1.5em;
  margin-top: 1.25em;
  margin-bottom: 2em;
`
const Label = styled.label`
  font-size: 1.25em;
  color: white;
`
const Title = styled.h1`
  font-size: 3.5em;
  text-decoration: underline;
  color: white;
`
const WhiteText = styled.p`
  color:white;
`
const LinkButton = styled.button`
        font-size: 2.5em;
        font-weight: bold;
        text-decoration: none;
        border: 2px solid black;
        background-color: white;
        width:7em;
        padding:.3em .5em;
        border-radius: 1em;
        transition-duration: .3s;
     
      :hover:{
        font-family: Impact, fantasy;
         color: rgb(0, 0, 0);
         transform: scale(1.2);
     }
     `
     const Links= styled.div`
     display: flex;
     justify-content: space-evenly;
     margin:.4em 0;
     `
var display = displayedPets.map(element => <PetContainer data={element}/>)

  return (
    <>
    <Title>Eulerity Pets</Title>
    <WhiteText as="h3">Welcome to Eulerity Pets!</WhiteText>
    <WhiteText as="h4">Click on a pet's image to zoom in, and select pets to download their photos:</WhiteText>
    <br></br>
    {/* <p>{displayUrls}</p> */}
    <form onSubmit={event=>{event.preventDefault();searchPets()}}>
          <Label>Search for pets: </Label>
          <input onChange={(event)=>setSearch(event.target.value)} name="petInput" class="textinput" value={search}></input>
          <Button as="input" type="submit" value="SUBMIT"></Button>
    </form>
    <br></br>
    <SButton onClick={selectAll}>SELECT ALL</SButton>
    <SButton onClick={clearSelection}>CLEAR SELECTION</SButton><br></br>
    <DButton onClick={downloadSelected}>DOWNLOAD</DButton>
    <div className="pets">
    {display}
    </div>
    <div style={{height:"35em"}}>
    </div>
    <div className ="footer">
    <Links>
    <Link to="/aboutme"><LinkButton>ABOUT ME</LinkButton></Link>
    <Link to="/"><LinkButton>HOME</LinkButton></Link>
    </Links>
    </div>
    </>
  );
}

export default PetPage;

