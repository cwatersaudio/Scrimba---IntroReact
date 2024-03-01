import React from 'react'

function Die(props) {
    return (
        <div className="die--container" onClick={props.toggleHeld} style={{ backgroundColor: props.held ? "green" : "white" }}>
            <p className='die--number'>{props.value}</p>
        </div >
    )
}

export default Die