import React, { Fragment, useState } from 'react'
import './cssfurn/session4furn.css'
import img1 from './imgesfurn/furniture_banner1.jpg'
import img2 from './imgesfurn/furniture_banner2.jpg'
import { Link } from 'react-router-dom'
const Session4Furn = () => {
  const [resize ,setresize]=useState(false)
  window.addEventListener('resize',(e)=>{
    let size = e.currentTarget.innerWidth
     size <= 941 ? setresize(true) :  setresize(false)
  })
  return (
   <Fragment>
   <div className='consec4furn'>

   <div className='session15' style={ resize ? { width :'300px' ,height:'233px'} :undefined  }>
    <div className='conslide1'>
    <h3>Super Sale</h3>
    <h1 style={{color:'black'}}>New Collection</h1>
    <div className="bn40div">
    <Link > <button>
    Shop Now
</button> </Link>
    </div>
    </div>
    <div className='imgeshop'>
    <img src={img1} alt=''/>
    </div>
    </div>
    <div className='session19' style={ resize ? { width :'500px' ,height:'235px'} :undefined  }>
    <div className='conslide2'>
    <h1 style={{color:'black'}}>New Season</h1>
    <h3>Sale 40% Off</h3>
    <div className="bn40div">
    <Link > <button>
    Shop Now
</button> </Link>
    </div>
    </div>
    <div className='imgeshop'>
    <img src={img2} alt=''/>
    </div>
    </div>
   </div>
   </Fragment>
  )
}

export default Session4Furn