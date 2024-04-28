import React, { Fragment, useEffect, useState } from 'react'
import Nav from './Nav'
import Footer from '../Components/Footer/Footer'
import Session8home from '../Components/Home/Session8home'
import Shop from '../Components/Shop/Shop'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Scrollh from './Scrollh'
import { NavLink } from 'react-router-dom'
import Slide1up from '../Components/Singleproduct/Slide1up'
const Shopmain = () => {
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
</div></div> :
    <Fragment>
    <Slide1up/>
      <Nav/>
      <section className='sec1about'>
        <h1>Shop List</h1>
      <h3>
        <NavLink to={'/'} > Home</NavLink>  <MdOutlineKeyboardArrowRight size={35} />  <h3 className='mp'>Shop List</h3>  
        </h3>
        </section>
      <Shop/>
      <Session8home/>
      <Scrollh/>
      <Footer/>
    </Fragment>
    }
    </Fragment>
  )
}

export default Shopmain