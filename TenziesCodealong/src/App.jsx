import React from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import Dice from 'react-dice-roll';
import Confetti from 'react-confetti'


export default function App() {

  const [dice, setDice] = React.useState(allNewDice()) //all the dice values and 'held' status
  const [tenzies, setTenzies] = React.useState(false)

  const diceRefs = []

  const createDiceRefs = () => { //creates 10 refs to the animated dice so that the rollDice() methods can be exposed
    for (let i = 0; i < 10; i++) {
      const diceRef = React.useRef(null)
      diceRefs.push(diceRef)
    }
  }


  createDiceRefs() //calls above function; is there a better place to put this?  Uses hooks so needed to be in root level?


  function randDice() {
    return Math.ceil((Math.random() * 6))
  }

  React.useEffect(() => { //checks whether Tenzies has happened (if first value is same as all values and if all are held)
    const allHeld = dice.every(die => die.held)
    const sameNum = dice.every(die => die.value === dice[0].value)
    allHeld && sameNum ? setTenzies(true) : setTenzies(false)


  }, [dice])

  React.useLayoutEffect(() => { //rolls dice after each change in dice value
    rollAllDice()


  }, [JSON.stringify(dice.map(die => {
    return die.value
  })
  )
  ])

  function allNewDice() {
    const newDice = []
    for (let i = 1; newDice.length < 10; i++) {
      const diceValue = randDice()
      newDice.push({
        value: diceValue,
        held: false,
        id: nanoid()
      })
    }
    return newDice
  }

  const diceRendered = dice.map((item, index) => { //renders the dice
    return (
      <div className='die--container' onClick={() => toggleHeld(item.id)}>
        <Dice
          size="36"
          key={item.id}
          faceBg={item.held ? "red" : "white"} //color change based on held status
          cheatValue={item.value}
          onClick={() => toggleHeld(item.id)}
          held={item.held}
          id={item.id}
          defaultValue={item.value}
          triggers={''} //turns off default click to roll functionality
          ref={diceRefs[index]}
        />
      </div>


    )

  })

  function toggleHeld(id) {
    setDice(oldDice => oldDice.map(item => {
      return item.id === id ? {
        ...item, held: !item.held
      } : item
    }))
  }

  function rollRemainingDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.held ? die : { ...die, value: randDice() }
    }))
  }

  function rollAllDice() {

    diceRefs.forEach((ref, index) => {
      if (!dice[index].held) {
        ref.current.rollDice();
      }
    });
  }

  function resetDice() {
    setTenzies(false)
    setDice(allNewDice)
  }


  return (

    <main>
      {tenzies ? <Confetti /> : null}
      {tenzies ? <h1>You Won Tenzies!</h1> : <h1>Tenzies</h1>}
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div id="diceArea">
        {dice ? diceRendered : "Loading..."}

      </div>
      {tenzies ? <button type="button" className='roll--button' onClick={resetDice}>New Game</button>
        : <button type="button" className='roll--button' onClick={rollRemainingDice}>Roll Dice</button>}
    </main>

  )
}