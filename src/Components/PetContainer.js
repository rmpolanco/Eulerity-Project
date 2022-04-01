import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {removeUrl,addUrl} from './urlSlice'
import Popup from 'reactjs-popup';
import styled from 'styled-components';


export default function PetContainer(props){
var {title,url,description,created} = props.data;
const [isSelected,flip] = useState(false);
const dispatch = useDispatch();
const Button = styled.button`
  color: black;
  font-size: 1.1em;
  margin: .2em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: .5em;
  background-color:white;
`;
return (
    <div className="pet" data-selected={isSelected} style={{borderWidth:isSelected?"6px":"2px",borderStyle:isSelected?"double":"solid"}}>
        
        <Popup trigger={<img src={url}></img>} closeOnDocumentClick><PetPopup img={url}/></Popup>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <p><strong>Image created on:</strong> {created}</p>
        <Button onClick={()=>{dispatch(isSelected?removeUrl(title):addUrl({id:title,image:url}));flip(!isSelected)}}>SELECT PET</Button>
    </div>
)
}

function PetPopup(props){
    return(<div id="popup"><img className="popupimg" src={props.img}></img><button className="close" onClick={()=>{document.getElementById("popup").remove()}}>
    &times;
  </button></div>)
}