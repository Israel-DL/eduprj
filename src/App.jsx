import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <About/>
        <Title subTitle='Our Programs' title='What We Offer'/>
        <Programs/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What Our Students Says'/>
        <Testimonials/>
        <Title subTitle='Contact Me' title='Get in Touch With Me'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App