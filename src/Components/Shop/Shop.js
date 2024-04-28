import React, { Fragment, useEffect, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import axios from 'axios';
import './shop.css'
import img1 from '../images/pexels-alena-shekhovtcova-6995882.jpg'
import star from '../images/rating.png'
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartslice } from '../../Cart/Cartslice';
const Shop = () => {
    const [x ,setx]=useState(true)
    const dispatch=useDispatch()
    const [product ,setproduct]=useState([])
    useEffect(()=>{
      axios.get(`https://mock.shop/api?query=%7B%20products(first%3A%2020)%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D`).then((res)=>setproduct(res.data.data.products.edges)).catch((err)=>console.log(err))
  },[])
  console.log(product);
  return (
   <Fragment>

   <section className='shop3' >
   <div className='upshop'>
   <RiFileListLine size={40} onClick={()=>{setx(false)}}  style={{boxShadow:'2px 2px 2px 2px  rgb(224, 211, 211)' ,cursor:'pointer'}}/>
   <MdOutlineFormatListBulleted size={40} onClick={()=>{setx(true)}} style={{boxShadow:'2px 2px 2px 2px  rgb(224, 211, 211)' ,cursor:'pointer'}} />
   </div>
   {
    x ?( 
        <div className ='conbigshop'>
        <div className='conshop'>
    {
        product.map((ol,idx)=>(
            <div key={ol.id} className='productshop'>
            <img src={ol.node.featuredImage.url} alt=''/>
            <div className=' condatashop'>
          <h1>{ol.node.title}</h1> 
            <div className='sales'>
            <h3> $ {ol.node.variants.edges[0].node.price.amount} <span>$ 300</span> <h4>60% off</h4> </h3>
            <div className='no'>
            <img src={star} alt=''/>
            <span>(25)</span>
            </div> 
            </div>
            <p>{ol.node.description}</p>
            <div className='colorsm'>
            <div className='c1'></div>
            <div className='c2'></div>
            <div className='c3'></div>
            </div>
           
            <div className='buto'>
            <Link onClick={()=>{dispatch(cartslice.actions.addToCart(ol))}}   style={{display:'flex',justifyContent:'center',alignItems:'center',width:'150px'}} class="btn41-43 btn-41">Add To Cart</Link>
            <div className='barshop'>
         <NavLink  onClick={()=>{dispatch(cartslice.actions.addtosingleproduct({name:ol.node.title,price:ol.node.variants.edges[0].node.price.amount,title:ol.node.description,image:ol.node.featuredImage.url})) } }>  <Link to={`/shop/${ol.node.title}`}> <FaSearchPlus size={30}  /></Link>  </NavLink> 
            <NavLink> <FaHeart size={25}   onClick={()=>{dispatch(cartslice.actions.addtofav(ol))}} /> </NavLink>
          
            
            </div>
            </div>
            </div>
            </div> ))
    }
   </div>
   <div className='slideshop'> <div className='opshop'> <h3>NEW COLLECTION</h3>
   <h1>
SALE 60% OFF</h1> <button class="c-button c-button--gooey"> Shop Now
  <div class="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  </div>
</button>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display: 'block', height: '0px', width: '0px'}}>
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
      <feBlend in="SourceGraphic" in2="goo"></feBlend>
    </filter>
  </defs>
</svg></div> <img src={img1} alt=''/></div>
   </div>)  :(<div className='conshop1' >
    {
        product.map(ol=>(
            <div className='pro1shop'>
            <img src={ol.node.featuredImage.url} alt=''/>
            <div className=' sales conu'>
            <h2>{ol.node.title}</h2>
            <h3>$ {ol.node.variants.edges[0].node.price.amount} <span>$ 200</span> <h4>60% off</h4></h3>
        </div>
        <div className='op'>
        <Link   onClick={()=>{ dispatch(cartslice.actions.addtocart(ol))}}   style={{display:'flex',justifyContent:'center',alignItems:'center',width:'150px'}} class="btn41-43 btn-41"> Add To Cart</Link>
        <NavLink  style={{marginTop:'23px' ,marginLeft:'15px'}} onClick={()=>{dispatch(cartslice.actions.addtosingleproduct({name:ol.node.title,price:ol.node.variants.edges[0].node.price.amount,title:ol.node.description,image:ol.node.featuredImage.url})) } }>  <Link to={`/shop/${ol.node.title}`}> <FaSearchPlus size={30}  /></Link>  </NavLink> 
        <NavLink> <FaHeart size={25}  style={{ marginTop:'20px' ,marginLeft:'10px'}}  onClick={()=>{dispatch(cartslice.actions.addtocart(ol))}} /> </NavLink>
        </div>
            </div>
        ))
    }

    </div>)
   } 
   </section>
   </Fragment>
  )
}

export default Shop