import React, { Fragment } from 'react'
import './session4about.css'
import img1 from '../images/team_img1.jpg'
import img2 from '../images/team_img2.jpg'
import img3 from '../images/team_img3.jpg'
import img4 from '../images/team_img4.jpg'
const Session4about = () => {
  return (
   <Fragment>
    <div className='consec4about'>
        <div className='data1sec4about'>
            <h1>Our Team Members</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore.</p>
        </div>
        <div className='cardssec4about'>
            <div className='cardsec4'>
                <img src={img1} alt=''/>
                <h2>John Muniz</h2>
                <p>Project Engineer</p>
            </div>
            <div className='cardsec4'>
                <img src={img2} alt=''/>
                <h2>Alea Brooks</h2>
                <p>Graphics Designer</p>
            </div>
            <div className='cardsec4'>
                <img src={img3} alt=''/>
                <h2>Anders Glick</h2>
                <p>Software Developer</p>
            </div>
            <div className='cardsec4'>
                <img src={img4} alt=''/>
                <h2>Richard Tice</h2>
                <p>Web Developer</p>
            </div>

        </div>
    </div>
   </Fragment>
  )
}

export default Session4about