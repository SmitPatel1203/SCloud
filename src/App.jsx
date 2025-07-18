import { useState } from 'react'
import './App.css'
import Header from './coponets/Header'
import Hero from './coponets/Hero'
import Services from './coponets/Services'
import Portfolio from './coponets/Protfolio'
import Testimonials from './coponets/Testimonial'
import Contact  from './coponets/Contact'
import Footer from './coponets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact /> 
      <Footer />
    </>
  )
}

export default App
