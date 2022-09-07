import React from 'react'
import {ImYoutube2} from 'react-icons/im'
import {AiFillFacebook} from 'react-icons/ai'
const Contact = () => {
  return (
    <div id='contact' className='contact'>
      
      <div className='footer_social'>
        <a href="https://www.youtube.com/watch?v=1-wnh1A37rA" target="_blank"><ImYoutube2/></a>
        <a href="https://www.facebook.com/New-Life-Kingdom-Ministries-7th-Day-
110400010462723" target="_blank"><AiFillFacebook/></a>
      </div>
      <div>
        <h3>Email: nlkm7day@gmail.com</h3>
        <h3>Phone: 770-885-0844</h3>
        <h3>Zelle Donations: 470-424-2588</h3>
      </div>
    </div>
  )
}

export default Contact