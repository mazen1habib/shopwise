import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import React, { Fragment } from 'react'
import img1 from './imgesapifurn/bed-1839184_1280.jpg'
import img2 from './imgesapifurn/a5d0368750d2e91212a59d645ae87665.jpg'
import img3 from './imgesapifurn/bedroom-3475656_1280.jpg'
import img4 from './imgesapifurn/bedroom-389254_1280.jpg'
import img5 from './imgesapifurn/bedroom-5664221_1280.jpg'
import img6 from './imgesapifurn/chic-modern-luxury-aesthetics-style-living-room-blue-tone.jpg'
import img7 from './imgesapifurn/couch-1845270_1280.jpg'
import img8 from './imgesapifurn/bathroom-6686057_1280.jpg'
import img9 from './imgesapifurn/workplace-5517744_1280.jpg'
import img10 from './imgesapifurn/gray-sofa-brown-living-room-with-copy-space.jpg'
import img11 from './imgesapifurn/kitchen-2174593_1280.jpg'
import img12 from './imgesapifurn/modern-apartment-with-comfortable-sofa-decor-generated-by-ai.jpg'
import './cssfurn/session5furn.css'
const Session5Furn = () => {
  return (
    <Fragment>
    <div className="consec5furn">
    <div className="slidesec5"> <h1 style={{color:'black'}}>instagram</h1>
    <p style={{color:'black'}}>@shoppingzone</p>
    </div>
<Swiper 
        loop={true}
       centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
         slidesPerView={5} className="mySwipersec5furn">
        <SwiperSlide className="mm" ><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide className="mm" ><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide className="mm" ><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide className="mm" ><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide className="mm" ><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide className="mm" ><img src={img6} alt="" /></SwiperSlide>
        <SwiperSlide className="mm" ><img src={img7} alt="" /></SwiperSlide>
        <SwiperSlide className="mm" ><img src={img8} alt="" /></SwiperSlide>
        <SwiperSlide className="mm" ><img src={img9} alt="" /></SwiperSlide>
        <SwiperSlide className="mm" ><img src={img10} alt="" /></SwiperSlide>
        <SwiperSlide className="mm" ><img src={img11} alt="" /></SwiperSlide>
        <SwiperSlide className="mm" ><img src={img12} alt="" /></SwiperSlide>
        <SwiperSlide className="mm" ><img src={img6} alt="" /></SwiperSlide>
        <SwiperSlide className="mm" ><img src={img7} alt="" /></SwiperSlide>
        <SwiperSlide className="mm" ><img src={img8} alt="" /></SwiperSlide>
      </Swiper>
      
      </div>
    </Fragment>
  )
}

export default Session5Furn