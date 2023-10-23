import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './data'

function App() {
  const cardData = Data.map((item) => {
    return(
    <Card 
        key={item.id}
        {...item} //spreading  object passed as props
    />
    )


  })
  return (
    <>
      <Navbar />
      <Hero />
     <div id="cards-container">
        {cardData}
      </div>
    </>
  )
}

export default App
