import React from "react";
import memesData from "../memesData";

export default function Meme() {
    let [meme, updateMeme] = React.useState({topText: null, bottomText: null, randomImage: null})
    let [allMemeImages, updateImages] = React.useState(memesData.data.memes)

    function getMemeImage() {
        console.log(allMemeImages)
        const image = allMemeImages[Math.floor(Math.random()*allMemeImages.length)].url;
        console.log(image)
        updateMeme(prevMem => {
            return {...prevMem, randomImage: image};
        })
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
                {meme.topText  && <p className="image--text--top">{meme.topText}</p>}
                {meme.randomImage && <img src={meme.randomImage} alt="meme" className="meme--image"/>}
                {meme.bottomText  && <p className="image--text--bottom">{meme.bottomText}</p>}
            </div>
        </div>
    )
}