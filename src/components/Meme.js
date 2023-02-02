import React from "react";
import memesData from "../memesData";

export default function Meme() {
    let [memeImage, changeMemeImage] = React.useState("")
    let [memeText, changeText] = React.useState({top: "", bottom: ""})

    function getMemeImage() {
        const memes = memesData.data.memes
        const randomMeme = memes[Math.floor(Math.random()*memes.length)].url;
        changeMemeImage(randomMeme)
    }

    function handleTop(event) {
        changeText(prev=> [event.target.value, prev.bottom])
    }

    function handleBottom(event) {
        changeText(prev=> [prev.top, event.target.value])
    }

    return (
        <div>
            <p>{memeText.top}</p>
            <p>{memeText.bottom}</p>
            <div>
                <div className="input--fields">
                    <input type="text" className="form--input" value={memeText.top} onChange={handleTop} placeholder="Top Text"></input>
                    <input type="text" className="form--input" value={memeText.bottom} onChange={handleBottom} placeholder="Bottom Text"></input>
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