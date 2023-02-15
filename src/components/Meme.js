import React from "react";
import memesData from "../memesData";

export default function Meme() {
    let [meme, updateMeme] = React.useState({topText: null, bottomText: null, randomImage: null})
    let [allMemeImages, updateImages] = React.useState(memesData.data.memes)

    function getMemeImage() {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(memes => updateImages(memes.data.memes));

        const image = allMemeImages[Math.floor(Math.random()*allMemeImages.length)].url;
        
        updateMeme(prevMem => {
            return {...prevMem, randomImage: image};
        })
    }

    function changeText(event) {
        updateMeme(prevMeme => {
            return {...prevMeme, [event.target.name]: event.target.value}
        })
    }


    return (
        <div>
            <div>
                <div className="input--fields">
                    
                        <input id="top-input" type="text" onChange={changeText} value={meme.topText} name="topText" className="form--input" placeholder="Top Text"></input>
                        <input type="text" onChange={changeText} value={meme.bottomText} name="bottomText" className="form--input" placeholder="Bottom Text"></input>
                   
                </div>
                <div className="input--button">
                    <button onClick={getMemeImage} className="form--submit">Get a new meme image 🖼</button>
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
        </div>
    )
}