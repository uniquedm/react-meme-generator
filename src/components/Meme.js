import React, { useEffect } from "react";
import memesData from "../memesData";

export default function Meme() {
    let [meme, updateMeme] = React.useState({topText: "", bottomText: "", randomImage: ""})
    let [allMemeImages, updateImages] = React.useState(memesData.data.memes)

    React.useEffect(()=> {
        fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(memes => updateImages(memes.data.memes))
    console.log("Fetched New Images!");
    }, [])

    function changeText(event) {
        const {name, value} = event.target
        updateMeme(prevMeme => {
            return {...prevMeme, [name]: value}
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const image = allMemeImages[Math.floor(Math.random()*allMemeImages.length)].url;
        updateMeme(prevMem => {
            return {...prevMem, randomImage: image};
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <div className="input--fields">
                        <input id="top-input" type="text" onChange={changeText} value={meme.topText} name="topText" className="form--input" placeholder="Top Text"></input>
                        <input type="text" onChange={changeText} value={meme.bottomText} name="bottomText" className="form--input" placeholder="Bottom Text"></input>
                </div>
                <div className="input--button">
                    <button className="form--submit">Get a new meme image 🖼</button>
                </div>
            </div>
            {meme.randomImage && <div className="image--container">
                <fieldset className="field--set">
                <legend>Meme</legend>
                    {meme.topText  && <p className="meme--text top">{meme.topText}</p>}
                    {meme.randomImage && <img src={meme.randomImage} alt="meme" className="meme--image"/>}
                    {meme.bottomText  && <p className="meme--text bottom">{meme.bottomText}</p>}
                </fieldset>
            </div>}
            </form>
        </div>
    )
}