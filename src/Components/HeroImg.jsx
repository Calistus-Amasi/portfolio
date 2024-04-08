import './HeroImgStyle.css'

import React from 'react'
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className="mask">
                <img src={IntroImg} alt="" className='IntroImg' />
            </div>

            <div className="content">
                <p>HI, I'M A FREELANCER.</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to='/project' className='btn'>PROJECT</Link>
                    <Link to='/project' className='btn btn-light'>CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg