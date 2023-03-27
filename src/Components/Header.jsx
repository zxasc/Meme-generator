import React from "react";
import troll from './../../public/assets/troll-face.png'

export default function Header() {
    return (
        <nav className="header">
            <img src={troll} className="header-troll" />
            <h1 className="header-h1">Meme Generator</h1>
            <h2 className="header-h2">React Course - Project 3</h2>
        </nav>
    )
}