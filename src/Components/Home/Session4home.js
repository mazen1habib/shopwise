import React, { Fragment, useState } from 'react'
import imgesec4 from '../images/tranding_img.png'
import './css/session4.css'
import { Link } from 'react-router-dom'
const Session4home = () => {
  const [resize ,setresize]=useState(false)
  window.addEventListener('resize',(e)=>{
    let size = e.currentTarget.innerWidth
     size <= 941 ? setresize(true) :  setresize(false)
  })
  return (
  <Fragment>
    <div className='containersec4' style={resize ? {width:'910px' , height:'400px'} : undefined}>
    <img src={imgesec4} alt='' style={resize ? {width:'400px' , height:'450px'} : undefined}/>
    <div className='condata'>
        <h3>New season trends!</h3>
        <h1>Best Summer Collection</h1>
        <h2>Sale Get up to 50% Off</h2>
        <Link to={'/shop'} class="btn41-43 btn-41">
        SHOP NOW </Link>
    </div>
    </div>
  </Fragment>
  )
}

export default Session4home