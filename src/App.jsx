import { useState } from 'react'
import './App.css'
import Header from './coponets/Header'
import Hero from './coponets/Hero'
import Services from './coponets/Services'
import Portfolio from './coponets/Protfolio'
import Contact  from './coponets/Contact'
import Footer from './coponets/Footer'
import Review from './coponets/Review'
import ThreeSteps from './coponets/ThreeSteps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Review />
      <ThreeSteps />
      <Contact /> 
      <Footer />
    </>
  )
}

export default App
