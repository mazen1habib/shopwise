import React, { Fragment } from 'react'
import img1 from '../images/about_img.jpg'
import './session2about.css'
const Session2aboutus = () => {
  return (
   <Fragment > 
   <div className='conabout2'>
    <img src={img1} alt=''/>
    <div className='condataabout'>
        <h1>Who We Are</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> consequuntur quibusdam enim expedita sed nesciunt incidunt <br/> accusamus adipisci officia libero laboriosam! <br/> <br/>
Proin gravida nibh vel velit auctor aliquet. nec sagittis sem nibh id <br/> elit. Duis sed odio sit amet nibh vultate cursus a sit amet mauris. <br/> Duis sed odio sit amet nibh vultate cursus a sit amet mauris.</p>
    </div>
    </div>
   </Fragment>
  )
}

export default Session2aboutus