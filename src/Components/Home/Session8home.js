import React, { Fragment } from 'react'
import './css/session8.css'
import { Link } from 'react-router-dom'
const Session8home = () => {
  return (
   <Fragment>
    <div className='consec8'>
        <h1>Subscribe Our Newsletter</h1>
        <div className='condatasec8'>
            <input type='email' placeholder='Enter Email Address'/>
            <Link to={'/'}><button className="bn-32 bn32">Subscribe</button></Link>
        </div>
    </div>
   </Fragment>
  )
}

export default Session8home