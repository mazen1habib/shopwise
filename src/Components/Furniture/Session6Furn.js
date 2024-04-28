
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import React, { Fragment } from 'react'
import img1 from './imgesapifurn/cl_logo1.png'
import img2 from './imgesapifurn/cl_logo2.png'
import img3 from './imgesapifurn/cl_logo3.png'
import img4 from './imgesapifurn/cl_logo4.png'
import img5 from './imgesapifurn/cl_logo5.png'
import img6 from './imgesapifurn/cl_logo6.png'
import './cssfurn/session6furn.css'
const Session6Furn = () => {
  return (
    <Fragment>
    <div className="consec6furn">
<Swiper 
        loop={true}
       centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
         slidesPerView={5} className="mySwipersec6furn">
        <SwiperSlide className="mo" ><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img6} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img6} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide className="mo" ><img src={img6} alt="" /></SwiperSlide>
      </Swiper>
      
      </div>
    </Fragment>
  )
}

export default Session6Furn