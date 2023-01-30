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
                    <input type="submit" className="form--submit" value="Get a new meme image 🖼"></input>
                </div>
            </form>
        </div>
    )
}