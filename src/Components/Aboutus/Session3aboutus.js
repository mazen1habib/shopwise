import React, { Fragment } from 'react'
import img1 from '../images/gmail.png'
import img2 from '../images/two-overlapping-square.png'
import img3 from '../images/edit.png'
import './Session3about.css'
const Session3aboutus = () => {
  return (
   <Fragment>
   <div className='con3aboutus'>
    <div className='datasec3aboutus'>
        <h1>Why Choose Us?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore.</p>
    </div>
    <div className='concard'>
        <div className='cards'> 
        <div className='conimgabout'>
        <img src={img3} alt=''/>
        </div>
        <h3>Creative Design</h3>
        <p>There are many variations of passages <br/> of Lorem Ipsum available, but the  <br/>majority have suffered alteration in
        <br/> some form</p>
        </div>
        <div className='cards'> 
        <div className='conimgabout'>
        <img src={img2} alt=''/>
        </div>
        <h3>Flexible Layouts</h3>
        <p>There are many variations of passages <br/> of Lorem Ipsum available, but the  <br/>majority have suffered alteration in
        <br/> some form</p>
        </div>
        <div className='cards'> 
        <div className='conimgabout'>
        <img src={img1} alt=''/>
        </div>
        <h3>Email Marketing</h3>
        <p>There are many variations of passages <br/> of Lorem Ipsum available, but the  <br/>majority have suffered alteration in
        <br/> some form</p>
        </div>
    </div>
   </div>

   </Fragment>
  )
}

export default Session3aboutus