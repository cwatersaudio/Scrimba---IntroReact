import React from 'react'
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'

function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function randDice() {
    return Math.ceil((Math.random() * 6))
  }

  function allNewDice() {
    const newDice = []
    for (let i = 1; newDice.length < 10; i++) {
      const diceValue = randDice()
      console.log(diceValue)
      newDice.push({
        value: diceValue,
        held: true,
        id: nanoid()
      })
    }
    return newDice
  }

  const diceRendered = dice.map(item => {
    return (
      <Die value={item.value} key={item.id} toggleHeld={toggleHeld} held={item.held} />
    )
  })

  function toggleHeld(id) {
    const diceIndexToToggle = dice.indexOf(dice.id === id)
    setDice(oldDice => {
      return {
        ...oldDice,
        diceIndexToToggle: !oldDice.id.held
      }
    })
    console.log("toggled")
  }

  function rollRemainingDice() {
    for (const die of dice) {
      if (!die.held) {
        setDice(oldDice => {
          return {
            ...oldDice,
            value: randDice()
          }
        })
      } else {

      }
    }
  }
  return (

    <main>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div id="diceArea">
        {dice ? diceRendered : "Loading..."}

      </div>
      <button type="button" className='roll--button' onClick={rollRemainingDice}>Roll Dice</button>
    </main>

  )
}

export default App
