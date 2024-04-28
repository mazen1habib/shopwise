import React, { Fragment, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './css/session5.css';
import star from '../images/rating.png'
import { BsCart3 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartslice } from '../../Cart/Cartslice';
const Session5 = () => {
    const [product ,setproduct]=useState([])
    const dispatch=useDispatch()
  useEffect(()=>{
    axios.get(`https://mock.shop/api?query=%7B%20products(first%3A%2020)%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D`).then((res)=>setproduct(res.data.data.products.edges)).catch((err)=>console.log(err))
},[])
  return (
    <Fragment>

     <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper containerproductc">
        {
          product.map(ol=>(
            <SwiperSlide  className='productc' >
            <img src={ol.node.featuredImage.url} alt=''/>
            <div className=' condatac'>
            <h2>{ol.node.title}</h2>
            <h3>{ol.node.variants.edges[0].node.price.amount} $ <span>$ 300</span> 60% off</h3>
            <div className='starg'>
        <NavLink><FaHeart size={24}  onClick={()=>{dispatch(cartslice.actions.addtofav(ol))}}/></NavLink> 
         <NavLink><BsCart3 size={24} onClick={()=>{dispatch(cartslice.actions.addToCart(ol))}} style={{marginLeft:'10px'}}/></NavLink> 
         <NavLink  style={{marginTop:'23px' ,marginLeft:'15px'}} onClick={()=>{dispatch(cartslice.actions.addtosingleproduct({name:ol.node.title,price:ol.node.variants.edges[0].node.price.amount,title:ol.node.description,image:ol.node.featuredImage.url})) } }>  <Link to={`/shop/${ol.node.title}`}> <FaSearchPlus size={24}  /></Link>  </NavLink> 
          <img src={star} alt=''/> 
        </div>
            </div>
            </SwiperSlide>
))
} 
      </Swiper>
    </Fragment>
  )
}

export default Session5