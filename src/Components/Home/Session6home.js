import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './css/session6.css'
import img1 from '../images/user_img1.jpg'
import img2 from '../images/user_img2.jpg'
import img3 from '../images/user_img3.jpg'
import img4 from '../images/user_img4.jpg'
const Session6home = () => {
  return (
    <Fragment>
    <div className='consec6'>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide className='sec6slide'> 
        <h1>Our Client Say!</h1>
        <p>Lorem Ipsum dolor set amit, consectetur adipisicing elit. <br/>  Although some pets infer that it is special, <br/> the mistake is that it is a free way  to potentially remain temporary.</p>
        <div className='conimge'>
        <img src={img1} alt=''/>
        <div className='condatasec6'>
        <h5>Lissa Castro</h5>
        <p>Designer</p>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='sec6slide'> 
        <h1>Our Client Say!</h1>
        <p>Lorem Ipsum dolor set amit, consectetur adipisicing elit. <br/>  Although some pets infer that it is special, <br/> the mistake is that it is a free way  to potentially remain temporary.</p>
        <div className='conimge'>
        <img src={img2} alt=''/>
        <div className='condatasec6'>
        <h5>Alden Smith</h5>
        <p>Designer</p>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='sec6slide'> 
        <h1>Our Client Say!</h1>
        <p>Lorem Ipsum dolor set amit, consectetur adipisicing elit. <br/>  Although some pets infer that it is special, <br/> the mistake is that it is a free way  to potentially remain temporary.</p>
        <div className='conimge'>
        <img src={img3} alt=''/>
        <div className='condatasec6'>
        <h5> Daisy Lana</h5>
        <p>Designer</p>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='sec6slide'> 
        <h1>Our Client Say!</h1>
        <p>Lorem Ipsum dolor set amit, consectetur adipisicing elit. <br/>  Although some pets infer that it is special, <br/> the mistake is that it is a free way  to potentially remain temporary.</p>
        <div className='conimge'>
        <img src={img4} alt=''/>
        <div className='condatasec6'>
        <h5>John Becker</h5>
        <p>Designer</p>
        </div>
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </Fragment>
  )
}

export default Session6home