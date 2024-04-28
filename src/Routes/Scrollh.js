import React, { Fragment, useState } from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import  './css/scroll.css'
const Scrollh = () => {
const [scroll,setscroll]=useState(false);
    window.addEventListener('scroll',()=>{
        let sc=window.scrollY
        sc >=351 ? setscroll(true) :setscroll(false)
      })
  return (
    <Fragment>
    {
        scroll ? ( <div className='scrollup'>
    <MdOutlineKeyboardDoubleArrowUp size={30} style={{color:'white'}} onClick={()=>{
         window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
    }} />
    </div>) :undefined
    }
    
    </Fragment>
  )
}

export default Scrollh