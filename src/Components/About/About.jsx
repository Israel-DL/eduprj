import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERITY</h3>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolores odit vero exercitationem fuga nisi distinctio. Qui error consequatur libero nobis quod dolore accusamus quibusdam. Ratione odio est expedita, tempore quidem possimus. Accusamus omnis, reiciendis commodi dolores harum nostrum incidunt fugiat quod facilis minus excepturi dolorum aspernatur enim ducimus nisi doloremque voluptate.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sequi, repellendus veritatis nemo ad, est ratione, vitae atque ducimus fuga eaque et consequuntur quis excepturi voluptatibus minus. Ea, commodi asperiores!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis modi itaque repudiandae! Incidunt, ipsum aspernatur praesentium dolorum explicabo unde harum autem amet rem quas!</p>
        </div>
    </div>
  )
}

export default About