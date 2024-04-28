import React from 'react'
import img1 from './imgesfurn/delivery-truck.png'
import img2 from './imgesfurn/save-money.png'
import img3 from './imgesfurn/24-hours.png'
import img4 from './imgesfurn/keycard.png'
import './cssfurn/session2furn.css'
const Session2Furn = () => {
  return (
    <div className='consec2furn'>
        <div className='datasec2furn'>
            <img src={img1} alt=''/>
            <div className='datafurn'>
            <h4>Free Delivery</h4>
            <p>Worldwide</p>
            </div>
        </div>
        <div className='line'></div>
        <div className='datasec2furn'>
        <img src={img2} alt=''/>
        <div className='datafurn'>
        <h4>Money Returns</h4>
            <p>30 Days money return</p>
            </div>
        </div>
        <div className='line'></div>
        <div className='datasec2furn'>
        <img src={img3} alt=''/>
        <div className='datafurn'>
        <h4>27/4 Online Support</h4>
            <p>Customer Support</p>
            </div>
        </div>
        <div className='line'></div>
        <div className='datasec2furn'>
        <img src={img4} alt=''/>
        <div className='datafurn'>
        <h4>Payment Security</h4>
            <p>Safe Payment</p>
            </div>
        </div>
    </div>
  )
}

export default Session2Furn