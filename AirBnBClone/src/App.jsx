import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Card 
      img="./src/assets/katie-zaferes.png"
      rating= {5}
      review={6}
      country="USA"
      title="Life lessons with Katie Zaferes"
      price={136}
      />
    </>
  )
}

export default App
