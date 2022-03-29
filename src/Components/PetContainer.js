import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
export default function PetContainer(props){
var {title,url,description,created} = props.data;

const [isSelected,flip] = useState(false);
return (
    <div className="pet" data-selected={isSelected} style={{borderWidth:isSelected?"5px":"0px"}}>
        
        <Popup trigger={<img src={url}></img>} closeOnDocumentClick><PetPopup img={url}/></Popup>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <p><strong>Image created on:</strong> {created}</p>
        <button onClick={()=>{flip(!isSelected)}}>Select</button>
    </div>
)
}

function PetPopup(props){
    return(<div id="popup"><img className="popupimg" src={props.img}></img><button className="close" onClick={()=>{document.getElementById("popup").remove()}}>
    &times;
  </button></div>)
}