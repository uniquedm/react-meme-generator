import React from "react";
import memesData from "../memesData";

export default function Meme() {
    let [memeImage, changeMemeImage] = React.useState("")

    function getMemeImage() {
        const memes = memesData.data.memes
        const randomMeme = memes[Math.floor(Math.random()*memes.length)].url;
        changeMemeImage(randomMeme)
    }

    return (
        <div>
            <div>
                <div className="input--fields">
                    <input type="text" className="form--input" placeholder="Top Text"></input>
                    <input type="text" className="form--input" placeholder="Bottom Text"></input>
                </div>
                <div className="input--button">
                    <button onClick={getMemeImage} className="form--submit">Get a new meme image 🖼</button>
                </div>
            </div>
            <div className="image--container">
            {memeImage && <img src={memeImage} alt="meme" className="meme--image"/>}
            </div>
        </div>
    )
}