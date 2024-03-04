import React from 'react'
import Dice from 'react-dice-roll';


function Die(props) {



    return (
        // <div className="die--container" onClick={props.toggleHeld} style={{ backgroundColor: props.held ? "green" : "white" }}>
        //     <p className='die--number'>{props.value}</p>
        // </div >
        <Dice ref={props.dieRef} size="36" cheatValue={props.value} />

    )
}

export default Die


