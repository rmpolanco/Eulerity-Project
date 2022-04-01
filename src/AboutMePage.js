import styled from 'styled-components';
import React from 'react';
import { Link } from "react-router-dom";
import gameratorIcon from "./Gamerator.png"
import mainframeIcon from "./Mainframe.png"
import "./App.css"

function AboutMePage() {
    const projects = {
        calculator:{
            url:"https://chrome.google.com/webstore/detail/calculator/ckgoigibnjdejlmkakdijkijgincdmfk",
            img:"https://lh3.googleusercontent.com/0hWJDocdz3WuRI22le8Uki-sd9dEkRGq_PVJQm_lUAF8WVDI_4TlHzb_I0kMUQ_CLJ3qDlrb_KsnjDZmZdJa9m6aPA=w128-h128-e365-rj-sc0x00ffffff"
        },
        mainframe:{
            url:"https://mthien819.itch.io/group-3-mainframe-final"
        },
        gamerator:{
            url:"https://gamerator-site.herokuapp.com/"
        }
    }
    const Title = styled.h1`
  font-size: 3.5em;
  text-decoration: underline;
`
const P1 = styled.p`
  font-size: 1.1em;
  text-decoration: none
`
const P2 = styled.a.attrs({className:"links",target:"_blank",rel:"noopener noreferrer"})`
  font-size: 1.5em;
  text-decoration: none;
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
    return(
        <div className="aboutme">
        <div className="text">
        <Title>About Me</Title>
        <p>Hi, my name is Ramon and I'm a graduating Brooklyn College student
         trying to get into the Web Development industry.</p>
         <br></br>
        <p>My love for problem solving and creative expression have led me 
        to Computer Science, where I have the potential to develop something truly transformative.</p>
        <br></br><br></br>
        <P1>Here's some stuff I've worked on recently:</P1>
        </div>
        <div className="projects">
        <ImageLink url={projects.mainframe.url} img={mainframeIcon}></ImageLink>
        <ImageLink url={projects.gamerator.url} img={gameratorIcon}></ImageLink>
        <ImageLink url={projects.calculator.url} img={projects.calculator.img}></ImageLink>
        </div>
        <br></br><br></br><br></br>
        <P2 href="https://www.linkedin.com/in/rmpolanco/">My LinkedIn</P2>
        <br></br><br></br><br></br>
        <P2 className="links" href="https://github.com/rmpolanco">My GitHub</P2>
        <div className ="footer">
    <Links>
    <Link to="/"><LinkButton>HOME</LinkButton></Link>
    <Link to="/pets"><LinkButton>PETS!</LinkButton></Link>
    </Links>
    </div>
        </div>
    )
}
    function ImageLink(props){
        return(
        <a className ="project" href={props.url} target="_blank" rel="noopener noreferrer">
        <img className="projectimg" src={props.img}/></a>
        )
    }

export default AboutMePage;