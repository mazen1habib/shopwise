import React, { Fragment } from 'react'
import './css/session2.css'
import imgshop1 from '../images/shop_banner_img1.jpg'
import imgshop2 from '../images/shop_banner_img2.jpg'
import { Link } from 'react-router-dom'
const Session2home = () => {
  return (
   <Fragment>
   <div className='consession2'>
    <div className='session12'>
    <div className='conslide1'>
    <h3>Super Sale</h3>
    <h1>New Collection</h1>
    <div className="bn40div">
    <Link to={'/shop'}> <button>
    Shop Now
</button> </Link>
    </div>
    </div>
    <div className='imgeshop'>
    <img src={imgshop1} alt=''/>
    </div>
    </div>
    <div className='session13'>
    <div className='conslide2'>
    <h1>New Season</h1>
    <h3>Sale 40% Off</h3>
    <div className="bn40div">
    <Link to={'/shop'}> <button>
    Shop Now
</button> </Link>
    </div>
    </div>
    <div className='imgeshop'>
    <img src={imgshop2} alt=''/>
    </div>
    </div>
   </div>
   </Fragment>
  )
}

export default Session2home