import React from 'react'
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
    const colorr = "rgb(50, 50, 50)";
    return(
        <div style={{marginTop: 50}}>
            <a href="https://www.github.com/bssenoz/" target="blank">
            <BsGithub size={"33"} style={{ textDecoration: "none", color: colorr, marginBottom: 3}}/></a>
            <a href="https://www.linkedin.com/in/buse-%C5%9Fen%C3%B6z-389022189/" target="blank">
            <AiFillLinkedin size={"40" } style={{marginTop: 2, color: colorr}} /></a>
        </div>

    )
}