import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import Nav from './Nav'
import Slide1up from '../Components/Singleproduct/Slide1up'
import Session8home from '../Components/Home/Session8home'
import Footer from '../Components/Footer/Footer'
import Scrollh from './Scrollh'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import { CiMap } from "react-icons/ci";
import './css/contactus.css'
const Contactus = () => {
  const [looding1 ,setlooding] =useState(false)
  useEffect(()=>{
    setlooding(true)
    setTimeout(()=>{
      setlooding(false)
    },5000)
  } ,[])
  return (
    <Fragment>
    {
 looding1 ? <div className='loader1'> <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div> </div> :
    <Fragment>
     <Slide1up/>
        <Nav/>
        <section className='sec1about'>
        <h1>Contact</h1>
      <h3>
        <NavLink to={'/'} > Home</NavLink>  <MdOutlineKeyboardArrowRight size={35} />  <h3 className='mp'>Contact</h3>  
        </h3>
        </section>
        <section className='contactus'>
          <div className='dataconatctus'>
            <div className='contactu'> <CiMap size={50} /> </div>
            <h3>Address</h3>
            <p>123 Street, Old Trafford, London, UK</p>
          </div>
          <div className='dataconatctus'>
            <div className='contactu'> <AiOutlineMail  size={50}/> </div>
            <h3>Email Address</h3>
            <p>info@yourmail.com</p>
          </div>
          <div className='dataconatctus'>
            <div className='contactu'> <IoPhonePortraitOutline size={50} /> </div>
            <h3>Phone</h3>
            <p>02-3325455-46</p>
          </div>
        </section>
        <Scrollh/>
       <Session8home/>
       <Footer/>
    </Fragment>
    }
    </Fragment>
  )
}

export default Contactus