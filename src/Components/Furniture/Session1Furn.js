import React, { Fragment, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './cssfurn/session1furn.css'
import { Link } from 'react-router-dom';
const Session1Furn = () => {
    const [resize ,setresize]=useState(false)
    window.addEventListener('resize',(e)=>{
      let size = e.currentTarget.innerWidth
       size <= 941 ? setresize(true) :  setresize(false)
    })
  return (
   <Fragment>
   <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiperfurn"
        style={ resize ? { width :'880px' ,height:'300px'} :undefined  }
      >
        <SwiperSlide className='sec1furnbanner1'>
        <div className='datafurn1'>
            <h4>Get up to 50% off Today Only!</h4>
            <h1>Wooden Chair Collection</h1>
            <Link to={'/'} class="bn3">Shop Now</Link>
        </div>
         </SwiperSlide>
        <SwiperSlide className='sec1furnbanner2' > 
        <div className='datafurn2'>
            <h4>NEW TRANDING</h4>
            <h1>Sofa Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
            <Link to={'/'} class="bn3">Shop Now</Link>
        </div></SwiperSlide>
        <SwiperSlide  className='sec1furnbanner3' > 
        <div className='datafurn3'>
            <h4 style={{color:'black'}}> Taking your Viewing Experience to Next Level</h4>
            <h1>Living Room Collection</h1>
            <Link to={'/'} class="bn3">Shop Now</Link>
        </div></SwiperSlide>
      </Swiper>
   </Fragment>
  )
}

export default Session1Furn