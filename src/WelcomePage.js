import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function WelcomePage() {
    const Title = styled.h1`
  font-size: 4em;
  text-decoration: underline;
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
     margin-top:10%;
     display: flex;
     justify-content: space-evenly;
     `
    return(
    <>
    <Title>Welcome!</Title>
    <Links>
    <Link to="/pets"><LinkButton>PETS!</LinkButton></Link>
    <Link to="/aboutme"><LinkButton>ABOUT ME</LinkButton></Link>
    </Links>
    </>
    )
}

export default WelcomePage;