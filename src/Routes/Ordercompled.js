import React, { Fragment, useEffect, useState } from 'react'
import Nav from './Nav'
import Footer from '../Components/Footer/Footer'
import Session8home from '../Components/Home/Session8home'
import Slide1up from '../Components/Singleproduct/Slide1up'
import { NavLink } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img from '../Components/images/check.png'
import './css/contactus.css'
const Ordercompled = () => {
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
        <h1>Order Completed</h1>
      <h3>
        <NavLink to={'/'} > Home</NavLink>  <MdOutlineKeyboardArrowRight size={35} />  <h3 className='mp'>Order Completed</h3>  
        </h3>
        </section>
        <section className='conorder'>
<img src={img} alt=' '/>
<h1>Your Order Is Completed!</h1>
<p>Thank you for your order! Your order is being processed and will be completed within 3-6 hours.</p>
<p>  You will receive an email confirmation when your order is completed.</p>
<NavLink to={'/shop'}> <button> Continue Shopping
</button></NavLink>

        </section>
        <Session8home/>
        <Footer/>
    </Fragment>
      }
      </Fragment>
  )
}

export default Ordercompled