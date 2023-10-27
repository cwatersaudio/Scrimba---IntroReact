import MArray from '../memesData.js'

export default function Input () {



    function getImage () {
            let randIndex = Math.floor(Math.random() * (99));
            let imageURL = MArray.data.memes[randIndex].url;
            console.log(imageURL)
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
        </>
    )
}