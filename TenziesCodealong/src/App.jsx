import React from 'react'
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'

export default function App() {

  const [dice, setDice] = React.useState(allNewDice())

  function randDice() {
    return Math.ceil((Math.random() * 6))
  }

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

  const diceRendered = dice.map(item => {
    return (
      <Die value={item.value} key={item.id} toggleHeld={() => toggleHeld(item.id)} held={item.held} id={item.id} />
    )
  })

  function toggleHeld(id) {
    console.log(id)
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