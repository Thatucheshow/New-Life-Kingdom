import React from 'react'
import VideoBG from '../../assets/videoBG.MP4'

const Header = () => {
  return (
    <div className='header'>
       <video src={VideoBG}/> 
    </div>
  )
}

export default Header