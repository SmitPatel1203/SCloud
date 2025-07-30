import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Protfolio'
import Contact  from './components/Contact'
import Footer from './components/Footer'
import Review from './components/Review'
import ThreeSteps from './components/ThreeSteps'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Review />
      <About />
      <ThreeSteps />
      <Contact /> 
      <Footer />
    </>
  )
}

export default App
