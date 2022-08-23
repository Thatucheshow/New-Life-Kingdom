import React from 'react'
import pastor from '../../assets/pastor1.jpg'


const About = () => {
  return (
    <div className='about'>
      <h1>We Are</h1>
        <h1>New Life Kingdom Ministries 7th Day</h1>
        <p>
          NEW Life Kingdom Ministry 7th Day was birthed out  of what was known as
          Christian Family Fellowship which was established   over 2 decades ago. Our senior
          Pastor <b>Alvin Bernard</b> who is also an author leads it. New Life Kingdom Ministries is
          located at <b>4741 Covington Highway, Decatur Georgia.</b>
        </p>
        <p>
          NLKM 7th day practices Sabbath keeping on the 7th day of the week.
          With Sabbath school starting at 11am and Sabbath service starting from 1pm every
          Saturday. <b>Bible Study every Wednesday night on Zoom </b>8pm EST <a href="https://us02web.zoom.us/j/4427029330?pwd=OWNIQm9NbTZIQmw5b3VPUlNLS
lpqQT09" target='_blank'>Bible Study Link</a> <br />
         <div className='Bstudy_details'>
         <b>Meeting ID:</b> 442 702 9330 <br />
          <b>Password:</b> 7QRBrG         
         </div> 
         <img className='pastor' src={pastor} alt="image_of_pastor" />
        </p>



    </div>
  )
}

export default About