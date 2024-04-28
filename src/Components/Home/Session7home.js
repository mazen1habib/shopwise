import React, { Fragment } from 'react'
import img1 from '../Furniture/imgesfurn/delivery-truck.png'
import img2 from '../Furniture/imgesfurn/save-money.png'
import img3 from '../images/24-hours.png'
import './css/session7.css'
const Session7home = () => {
  return (
   <Fragment>
   <div className='consec7'>
    <div className='condata'>
     <img src={img1} alt=''/>
     <h3>Free Delivery</h3>
     <p>If you are going to use of Lorem, you <br/> need to be sure there anything</p>
    </div>
    <div className='line'></div>
    <div className='condata'>
     <img src={img2} alt=''/>
     <h3>30 Day Return</h3>
     <p>If you are going to use of Lorem, you <br/> need to be sure there anything</p>
    </div>
    <div className='line'></div>
    <div className='condata'>
     <img src={img3} alt=''/>
     <h3>27/4 Support</h3>
     <p>If you are going to use of Lorem, you <br/> need to be sure there anything</p>
    </div>
   </div>
   </Fragment>
  )
}

export default Session7home