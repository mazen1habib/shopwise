import React, { Fragment, useState } from 'react'
import img1 from '../images/popup_img.jpg'
import { MdClose } from "react-icons/md";
import './slideup.css'
import { NavLink } from 'react-router-dom';
const Slide1up = () => {
    const [x,setx]=useState(false)
  return (
   <Fragment>
    <div className='conslideupo' style={ x ? {display:'none'} : {display:'flex'}}>
    <div className='conslidepo1' >
        <img src={img1} alt=''/>
        <div className='dataslidepo'>
            <MdClose size={30} onClick={()=>setx(true)} style={{marginLeft:'390px' ,marginTop:'20px' }}/>
            <h2>Subscribe And Get 25% Discount!</h2>
            <p>Subscribe to the newsletter to receive updates about new products.</p>
            <input type="text" name="text" class="input" placeholder="Enter Your Email"/>
          <NavLink to={'/'}>  <button>
  <div class="default-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle></svg>
    <span>Quick View</span>
  </div>
  <div class="hover-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><circle r="1" cy="21" cx="20"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    <span>Shop Now</span>
  </div>
</button></NavLink>
<div className='rt'>
<div class="container">
    <input type="checkbox" id="cbx2" style={{display:'none'}}/>
    <label for="cbx2" class="check">
        <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
        </svg>
    </label>
</div> <p style={{color:'black'}}>Don't show this popup again!</p>
</div>

        </div>
    </div>
    </div>
   </Fragment>
  )
}

export default Slide1up