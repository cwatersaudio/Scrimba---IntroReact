import MArray from '../memesData.js'
import React from 'react'

 /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

export default function Input () {
    const [currentMeme, setMeme] = React.useState({
            topText: "",
            bottomText:"",
            randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    let imgURL, memeHeight, memeWidth;

    function getImage () {
            let randIndex = Math.floor(Math.random() * 99);
            let randMeme = MArray.data.memes[randIndex]
            let {name,url,width,height} = randMeme
            setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: url
            })
            )
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
        src={currentMeme.randomImage}
        alt="meme" 
        className = "meme--image"
        id="meme"
        />
        
        </>
    )
}