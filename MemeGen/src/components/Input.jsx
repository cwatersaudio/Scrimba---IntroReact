import MArray from '../memesData.js'
import React from 'react'



export default function Input () {
    const [memeURL, setMemeURL] = React.useState("")
    let imgURL, memeHeight, memeWidth;

    function getImage () {
            let randIndex = Math.floor(Math.random() * 99);
            imgURL = MArray.data.memes[randIndex].url
            
            setMemeURL(imgURL)
            console.log(memeURL)
        }

    
    return (
        
        <>
        <form id="form-container">
            <input 
            type="text" 
            id="meme1" 
            placeholder="top meme"/>
            <input 
            type="text" 
            id="meme2"
            placeholder="bottom meme"/>
            <button id="meme-button" type="button" onClick={getImage}>Get a new meme image  🖼</button>
        </form>
        <img 
        src={memeURL}
        alt="meme" />
        
        </>
    )
}