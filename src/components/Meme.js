import React from "react";
import memesData from "../memesData";

export default function Meme() {
    let [url, changeUrl] = React.useState("")

    function handleClick() {
        const memes = memesData.data.memes
        const randomUrl = memes[Math.floor(Math.random()*memes.length)].url;
        changeUrl(randomUrl)
    }

    return (
        <div>
            <div>
                <div className="input--fields">
                    <input type="text" className="form--input" placeholder="Top Text"></input>
                    <input type="text" className="form--input" placeholder="Bottom Text"></input>
                </div>
                <div className="input--button">
                    <button onClick={handleClick} className="form--submit">Get a new meme image 🖼</button>
                </div>
            </div>
            <div className="image--container">
            <img src={url} alt="meme" className="meme--image"/>
            </div>
        </div>
    )
}