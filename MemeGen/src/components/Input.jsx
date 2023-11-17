import MArray from '../memesData.js'
import {useEffect,useState} from 'react'

/**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

export default function Input () {
    const [currentMeme, setMeme] = useState({
            topText: "",
            bottomText:"",
            randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes,setAllMemes] = useState([])
    
   

    useEffect(()=> {
        console.log("effect ran")
        fetch("https://api.imgflip.com/get_memes")
            .then(Response => Response.json())
            .then(data => setAllMemes(data.data.memes))
    },[])

    function getImage () {
  
            let randIndex = Math.floor(Math.random() * 99);
            let randMeme = allMemes[randIndex]
            let {name,url,width,height} = randMeme
            setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: url
            })
            )
        }
    
    function handleChange (event) {
        const {value,name} = event.target

        setMeme (meme => {
            return {
                ...meme,
                [name]:value
            }
        })
    }

    
    return (
        
        <>
        <form id="form-container">
            <input 
            type="text" 
            id="meme1" 
            placeholder="top meme"
            name= "topText"
            value={currentMeme.topText}
            onChange={handleChange}
            />
            
            <input 
            type="text" 
            id="meme2"
            placeholder="bottom meme"
            name="bottomText"
            value={currentMeme.bottomText}
            onChange={handleChange}
            />
            
            <button id="meme-button" type="button" onClick={getImage}>Get a new meme image  🖼</button>
        </form>
        <div className="meme">
            <img 
            src={currentMeme.randomImage}
            alt="meme" 
            className = "meme--image"
            id="meme"
            />
            <h2 className="meme--text top">{currentMeme.topText}</h2>
            <h2 className="meme--text bottom">{currentMeme.bottomText}</h2>
        </div>
        
        </>
    )
}