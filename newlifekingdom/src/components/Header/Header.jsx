import React from 'react'

import Video from '../../assets/VideoBG.mp4'
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
       <div className='header_content'>
        
        <h1>NEW LIFE</h1>
        <h1>KINGDOM</h1>
        <h1>MINISTRIES 7th DAY SABBATH</h1>
       </div>
    </div>
  )
}

export default Header