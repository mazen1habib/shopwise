import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const SingleBlog1 = () => {
  return (
    <Fragment>
        <section className='sec1about'>
        <h1>Blog Single Post</h1>
      <h3>
        <NavLink to={'/'} > Home</NavLink>  <MdOutlineKeyboardArrowRight size={35} />  <NavLink to={'/Blog'} > Blog </NavLink>  <MdOutlineKeyboardArrowRight size={35} />  <h3 className='mp'>Blog Single Post</h3>  
        </h3>
        </section>
    </Fragment>
  )
}

export default SingleBlog1