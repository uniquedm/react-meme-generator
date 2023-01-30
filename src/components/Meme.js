import React from "react";

export default function Meme() {
    return (
        <div>
            <form>
                <div className="input--fields">
                    <input type="text" className="form--input" placeholder="Top Text"></input>
                    <input type="text" className="form--input" placeholder="Bottom Text"></input>
                </div>
                <div className="input--button">
                    <button className="form--submit">Get a new meme image 🖼</button>
                </div>
            </form>
        </div>
    )
}