import React, { Fragment, useEffect, useState } from 'react'
import Nav from './Nav'
import Session8home from '../Components/Home/Session8home'
import Footer from '../Components/Footer/Footer'
import img1 from '../Components/images/user.png'
import {  useSelector } from 'react-redux'
import './css/accountme.css'
import '../Components/Looding/looding.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom'
import Slide1up from '../Components/Singleproduct/Slide1up'
const Accountme = () => {
    const profile = useSelector((state)=>state.cart.profile.address)
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
</div> </div>  : <Fragment> 
<Slide1up/>
    <Nav/>
    <section className='sec1about'>
        <h1>My Account</h1>
      <h3>
        <NavLink to={'/'} > Home</NavLink>  <MdOutlineKeyboardArrowRight size={35} />  <h3 className='mp'>My Account</h3>  
        </h3>
        </section>
    <section className='conaccount'>
    <div className='conprofile'>
    <img src={img1} alt=''/>
    <h1>name | {profile.name}</h1>
    <div className='line1'></div>
    <h1>Email | {profile.email}</h1>
    <div className='line1'></div>
    <h1>phone | {profile.phone}</h1>
    <div className='line1'></div>
    <h1> Address| {profile.address}</h1>
    <Link to={'/'} class="btn41-431 btn-411">
       Back </Link>
    </div>
    </section>
    <Session8home/>
    <Footer/>
    </Fragment>
     }
    </Fragment>
  )
}

export default Accountme