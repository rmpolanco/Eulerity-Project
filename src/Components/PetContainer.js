import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {removeUrl,addUrl} from './urlSlice'
import Popup from 'reactjs-popup';
export default function PetContainer(props){
var {title,url,description,created} = props.data;
const [isSelected,flip] = useState(false);
const dispatch = useDispatch();

return (
    <div className="pet" data-selected={isSelected} style={{borderWidth:isSelected?"5px":"1px"}}>
        
        <Popup trigger={<img src={url}></img>} closeOnDocumentClick><PetPopup img={url}/></Popup>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <p><strong>Image created on:</strong> {created}</p>
        <button onClick={()=>{dispatch(isSelected?removeUrl(title):addUrl({id:title,image:url}));flip(!isSelected)}}>Select</button>
    </div>
)
}

function PetPopup(props){
    return(<div id="popup"><img className="popupimg" src={props.img}></img><button className="close" onClick={()=>{document.getElementById("popup").remove()}}>
    &times;
  </button></div>)
}