import React from 'react'
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'
// import Confetti from 'react-confetti'


export default function App() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  function randDice() {
    return Math.ceil((Math.random() * 6))
  }

  React.useEffect(() => {
    const allHeld = dice.every(die => die.held)
    const sameNum = dice.every(die => die.value === dice[0].value)
    allHeld && sameNum ? setTenzies(true) : setTenzies(false)

  }, [dice])

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

  function resetDice() {
    setTenzies(false)
    setDice(allNewDice)
  }
  return (

    <main>
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