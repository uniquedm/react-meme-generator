import React from "react";
import HeaderImage from "../images/header-logo.png"

export default function Header() {
    return (
        <div className="app-header">
            <img src={HeaderImage} alt="app-logo" className="header-img"/>
            <p className="header-title">Meme Generator</p>
        </div>
    )
}