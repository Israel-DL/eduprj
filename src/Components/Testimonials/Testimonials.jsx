import React, { useRef } from 'react'
import './Testimonials.css'
import next_btn from '../../assets/next-btn.png'
import prev_btn from '../../assets/prev-btn.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;


const slideForward = ()=>{
    if(tx > -50){
        tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = ()=>{
    if(tx < 0){
        tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}


  return (
    <div className='testimonials'>
        <img src={next_btn} alt=""  className='next-btn' onClick={slideForward}/>
        <img src={prev_btn} alt="" className='prev-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>John Mak</h3>
                                <span>Lagos, Nigeria</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur! Maxime porro omnis consectetur dicta odit minima, veritatis et facilis!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Precious Mak</h3>
                                <span>Lagos, Nigeria</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur! Maxime porro omnis consectetur dicta odit minima, veritatis et facilis!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Kim Austin</h3>
                                <span>Lagos, Nigeria</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur! Maxime porro omnis consectetur dicta odit minima, veritatis et facilis!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Victor Doe</h3>
                                <span>Lagos, Nigeria</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur! Maxime porro omnis consectetur dicta odit minima, veritatis et facilis!</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials