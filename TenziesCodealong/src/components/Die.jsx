import React from 'react'
import Dice from 'react-dice-roll';


function Die(props) {




    return (
        <div className='die--container' onClick={props.onClick}>
            <Dice {...props} />
        </div>

    )
}

export default Die


