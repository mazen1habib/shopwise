import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Session1Blog = () => {
  return (
   <Fragment>
    <section className='sec1about'>
        <h1>BLOG</h1>
      <h3>
        <NavLink to={'/'} > Home</NavLink>  <MdOutlineKeyboardArrowRight size={35} />  <h3 className='mp'>BLOG</h3>  
        </h3>
        </section>
   </Fragment>
  )
}

export default Session1Blog