import React from 'react'
import Dice from 'react-dice-roll';


function Die(props) {
    const [show, setShow] = React.useState(1)


    return (
        // <div className="die--container" onClick={props.toggleHeld} style={{ backgroundColor: props.held ? "green" : "white" }}>
        //     <p className='die--number'>{props.value}</p>
        // </div >
        <Dice />

    )
}

export default Die


