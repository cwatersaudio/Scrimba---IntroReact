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
    img={item.coverImg}
    rating={item.stats.rating}
    review={item.stats.reviewCount}
    country={item.location}
    title={item.title}
    price={item.price}
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
