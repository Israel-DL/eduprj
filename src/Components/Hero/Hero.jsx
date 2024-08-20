import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Ensuring better education for a better tommorow</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatibus ipsum blanditiis sapiente ipsam accusantium delectus quia sed et, quos ducimus quasi ad cumque aut autem iure, enim harum ab!</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}


export default Hero