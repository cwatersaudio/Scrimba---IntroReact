import React from 'react'
import Dice from 'react-dice-roll';


function Die(props) {




    return (
        // <div className="die--container" onClick={props.toggleHeld} style={{ backgroundColor: props.held ? "green" : "white" }}>
        //     <p className='die--number'>{props.value}</p>
        // </div >
        <Dice triggers={[props.trigger, 'rollDice']} size="36" faceBg={props.held ? "red" : "none"} cheatValue={props.value} /> //die value is forced to value recieved via props

    )
}

export default Die


