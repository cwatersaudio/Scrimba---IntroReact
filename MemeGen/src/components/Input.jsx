export default function Input () {
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
            <button id="meme-button">Get a new meme image  🖼</button>
        </form>
        </>
    )
}