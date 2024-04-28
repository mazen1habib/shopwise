import React, { Fragment, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './css/Session1.css'
import { Link } from 'react-router-dom';

const Session1home = () => {
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
          delay: 1700,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={ resize ? { width :'900px' ,height:'300px'} :undefined  }
      >
        <SwiperSlide className='banner1'> 
        <div className='consec1' >
        <h4> Get up to 50% off Today Only!</h4>
        <h1>Woman Fashion</h1>
        <Link to={'/shop'} class="btn41-43 btn-41">
        SHOP NOW </Link>
        </div> </SwiperSlide>
        <SwiperSlide className='banner2'> 
        <div className='consec2'>
        <h4>50% off in all products</h4>
          <h1>Man Fashion</h1>
          <Link to={'/shop'} class="btn41-43 btn-41">
        SHOP NOW </Link>
        </div></SwiperSlide>
        <SwiperSlide className='banner3'> 
        <div className='consec3'>
          <h4>Taking your Viewing Experience to Next Level</h4>
          <h1>Summer Sale</h1>
          <Link to={'/shop'} class="btn41-43 btn-41">
        SHOP NOW </Link>
        </div></SwiperSlide>
      </Swiper>
    </Fragment>
  )
}

export default Session1home