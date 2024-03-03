import React from 'react'

function Die(props) {
    const [show, setShow] = React.useState(1)

    // React.useEffect(() => {
    //     for (let i = 1; i <= 6; i++) {
    //         elDiceOne.classList.remove('show-' + i);
    //         if (diceOne === i) {
    //             elDiceOne.classList.add('show-' + i);
    //         }
    //     }
    // }, [props.value])
    return (
        // <div className="die--container" onClick={props.toggleHeld} style={{ backgroundColor: props.held ? "green" : "white" }}>
        //     <p className='die--number'>{props.value}</p>
        // </div >

        <>
            <div id='dice1' className="dice--container">
                <div id="dice-one-side-one" className='side one' />
                <div className="dot one-1" />
            </div>
            <div id="dice-one-side-two" className='side two'>
                <div className="dot two-1" />
                <div className="dot two-2" />
            </div>
            <div id="dice-one-side-three" className='side three'>
                <div className="dot three-1" />
                <div className="dot three-2" />
                <div className="dot three-3" />
            </div>
            <div id="dice-one-side-four" className='side four'>
                <div className="dot four-1" />
                <div className="dot four-2" />
                <div className="dot four-3" />
                <div className="dot four-4" />
            </div>
            <div id="dice-one-side-five" className='side five'>
                <div className="dot five-1" />
                <div className="dot five-2" />
                <div className="dot five-3" />
                <div className="dot five-4" />
                <div className="dot five-5" />
            </div>
            <div id="dice-one-side-six" className='side six'>
                <div className="dot six-1" />
                <div className="dot six-2" />
                <div className="dot six-3" />
                <div className="dot six-4" />
                <div className="dot six-5" />
                <div className="dot six-6" />
            </div>
        </>

    )
}

export default Die


