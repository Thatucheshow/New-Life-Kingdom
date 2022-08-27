import React from 'react'
import logo from '../../assets/logo.jpg'
import Video from '../../assets/VideoBG.mp4'
import { Typewriter } from 'react-simple-typewriter'
import image from '../../assets/NLbanner3.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div className='overlay'></div>
       <video loop autoPlay muted>
        <source className='background'
          src={Video} type="video/mp4"
        />
       </video>
       <div id='#' className='logo'>
          <img className='img_logo' src={logo} alt="church logo" />
       </div>
       <div>

       </div>
       <div className='header_content'>
        
        <h1>
          WELCOME TO NEW LIFE KINGDOM <br /> MINISTRIES 7th DAY SABBATH: <br />
        <span>
          <Typewriter
            words={['Join our family for worship every Saturday @11am EST', 'And Wednesday for bible study 8pm EST' ]}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </span>
        </h1>
       </div>
    </div>
  )
}

export default Header