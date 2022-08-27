import React from 'react'
import pastor from '../../assets/pastor1.jpg'
import praise from '../../assets/praiseteam1.jpg'


const About = () => {
  return (
    <div id='About' className='about'>
      <h1>ABOUT US <br />  </h1>
      <div className='about_container'>
      <img className='pastor' src={pastor}        alt="image_of_pastor" />
        <p>
          NEW Life Kingdom Ministry 7th Day was birthed out  of what was known as
          Christian Family Fellowship which was established   over 2 decades ago. Our senior
          Pastor <b>Alvin Bernard</b> who is also an author leads it. New Life Kingdom Ministries is
          located at <b>4741 Covington Highway, Decatur Georgia 30035.</b>
        </p>
        <p>
          NLKM 7th day practices Sabbath keeping on the 7th day of the week.
          With Sabbath school starting at 11am and Sabbath service starting from 1pm every
          Saturday. <br /> <b>Bible Study every Wednesday night on Zoom </b>8pm EST <a href="https://us02web.zoom.us/j/4427029330?pwd=OWNIQm9NbTZIQmw5b3VPUlNLS
          lpqQT09" target='_blank'>Bible Study Link</a> <br />
         <div className='Bstudy_details'>
         <b>Meeting ID:</b> 442 702 9330 <br />
          <b>Password:</b> 7QRBrG         
         </div> 
        </p>
        <p> <b>Meet Our Pastor</b> <br />
          Alvin Bernard is the Senior Pastor of New Life Kingdom Ministries 7th day; he was
          born in from Trinidad and Tobago and has spent most of his life studying the bible.
          Early on he was exposed to advance bible teaching, which shaped his beliefs today.
          He earned a Bachelor of Arts degree in theology from Oakwood University in
          Huntsville, Alabama (1978), and continued his graduate studies at Long Island
          University until 1981. It was during that time he experienced a series of life
          changing events that he best describes as his true conversion. Without knowing, at
          the time, that it was a year of Jubilee, he was released from much theological
          bondage and gained the freedom to conduct critical studies in the word. New
          insights and revelations surfaced that earned the distinction of “Hidden truths
          coming to light.” <br/> 
          <br />
          Pastor Bernard published the book: <b>Insights to the Book of Daniel,</b>  (2003 $2006)
          available in bookstores from the publisher – Author house, IBSN 1-4140-1874-
          6(sc). <br />
          <br />
          <b> Alvin Bernard also published a 2020 Re-Vision</b>; this magazine is a review of some
          studies in the book “ Insights to the Book of Daniel” as well as additional charts,
          graphs, and chronologies that add clarity to the topics presented. Central to these
          studies is the truth about the first advent of the Messiah and the imminence of His
          Second Coming. <br />
          <br />
          The 2020 Re-Vision will help you understand that in 10 years, the next Jubilee
          (2030) will be the final year of the Jubilee of the sixth Millennium. The seventh
          Millennium, since Adam sinned, begins 2031.
        </p>
      </div>
      
      


    </div>
  )
}

export default About