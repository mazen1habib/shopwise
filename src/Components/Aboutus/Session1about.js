import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './session1about.css'
const Session1about = () => {
  return (
    <Fragment>
        <section className='sec1about'>
        <h1>About Us</h1>
      <h3>
        <NavLink to={'/'} > Home</NavLink>  <MdOutlineKeyboardArrowRight size={35} />  <h3 className='mp'>Aboutus</h3>  
        </h3>
        </section>
    </Fragment>
  )
}

export default Session1about