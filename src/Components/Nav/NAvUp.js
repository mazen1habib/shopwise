import React, { Fragment } from 'react'
import './navup.css'
import eng from '../images/Flag_of_the_United_Kingdom_(1-2).svg.png'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { TfiUser } from "react-icons/tfi";
import { BsChevronDown } from "react-icons/bs";
const NAvUp = () => {
  return (
   <Fragment>
    <div className='containernavup'>
        <ul>
            <li> <img src={eng}alt=''/> English   <BsChevronDown size={13} /></li>
            <li>USD <BsChevronDown size={13} /></li>
            <li><IoPhonePortraitOutline/> <span  >02-3325455-46</span></li>  
        </ul>
        <ul>
            <NavLink to={'/favorite'}> <li><IoHeartOutline/>   Wishlist</li></NavLink>
            <li><NavLink to={'/login'}> <TfiUser />  Login</NavLink> </li>  
        </ul>
    </div>
    <div className='lig'>
        
    </div>
   </Fragment>
  )
}

export default NAvUp