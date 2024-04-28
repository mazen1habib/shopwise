import React, { Fragment, useEffect, useState } from 'react'
import Nav from '../Routes/Nav'
import Footer from '../Components/Footer/Footer'
import Session8home from '../Components/Home/Session8home'
import '../Components/Shop/shop.css'
import { FaHeart } from "react-icons/fa";
import { TbArrowsShuffle } from "react-icons/tb";
import { FaSearchPlus } from "react-icons/fa";
import {  Link, NavLink } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import star from '../Components/images/rating.png'
import Scrollh from '../Routes/Scrollh'
import { useDispatch } from 'react-redux';
import { cartslice } from '../Cart/Cartslice';
import { TiDeleteOutline } from "react-icons/ti";
import './cartshop.css'
import '../Components/Looding/looding.css'
import img1 from '../Components/images/pexels-alena-shekhovtcova-6995882.jpg'
const Cartshop = () => {
  const dispatch=useDispatch()
    const product = useSelector((state)=>state.cart.cart)
    console.log(product)
    const furn = useSelector((state)=>state.cart.furn)
    const [looding1 ,setlooding] =useState(false)
// const cart = ()=>{
//   const[totalprice,settotalprice]=useState(0);
//   useEffect(()=>{
//     let total=0;
//     cart.forEach((product) => {
//       total+=product.node.variants.edges[0].node.price.amount });
//       settotalprice(total)
//   },[cart]) 
// };
    useEffect(()=>{
      setlooding(true)
      setTimeout(()=>{
        setlooding(false)
      },5000)
    } ,[])
  return (
    <Fragment>
    {
 looding1 ? <div className='loader1'><div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div> </div> :
    <Fragment>
        <Nav/>
        <section className='shop4'>
        <div className='conshop'>
    {
        product.map((ol,idx)=>(
            <div  className='productshop'>
            <img src={ol.node.featuredImage.url || ol.images[0]} alt=''/>
            <div className=' condatashop'>
            <div className='dh' style={{display:'flex',justifyContent:'space-between'}}>
           <h1>{ol.node.title || ol.title }</h1>
           <TiDeleteOutline size={30} onClick={()=>{dispatch(cartslice.actions.removearry(ol.cartQuatity))}}  style={{marginRight:'20px',marginTop:'10px'}}/>
           </div> 
            {/* <div className='sales'>
            <h3> $ {ol.node.variants.edges[0].node.price.amount || ol.price} <span>$ 300</span> <h4>60% off</h4> </h3>
            <div className='no'>
            
            <img src={star} alt=''/>
            <span style={{textDecoration:'none'}}>(25)</span>
            </div> 
            </div> */}
            <p>{ol.node.description}</p>
            <div className='colorsm'>
            <div className='c1'></div>
            <div className='c2'></div>
            <div className='c3'></div>
            </div>
            <div className='buto'>
            <div className='barshop'>
            <NavLink  style={{marginTop:'23px' ,marginLeft:'15px'}} onClick={()=>{dispatch(cartslice.actions.addtosingleproduct({name:ol.node.title,price:ol.node.variants.edges[0].node.price.amount,title:ol.node.description,image:ol.node.featuredImage.url})) } }>  <Link to={`/shop/${ol.node.title}`}> <FaSearchPlus size={25}  /></Link>  </NavLink> 
            <NavLink><FaHeart size={25} style={{marginTop:'20px'}} onClick={()=>{dispatch(cartslice.actions.addtofav(ol))}}/></NavLink> 
            </div>
            <div className='totalprice'>
            <h3>Total product : { ol.cartQuatity}</h3>
            <h3> total price:${ ol.node.variants.edges[0].node.price.amount * ol.cartQuatity}</h3>
            </div>
            </div>
            </div>
            </div> ))
    }
    {
       furn.map((pl,idx1)=>(
            <div  className='productshop'>
            <img src={pl.images[0]} alt=''/>
            <div className=' condatashop'>
            <div className='dh' style={{display:'flex',justifyContent:'space-between'}}>
           <h1>{pl.title }</h1> 
           <TiDeleteOutline size={30} onClick={()=>{dispatch(cartslice.actions.removearry(idx1))}}  style={{marginLeft:'120px' ,marginTop:'10px'}}/>
           </div>
            <div className='sales'>
            <h3> $ { pl.price} <span>$ 300</span> <h4>60% off</h4> </h3>
            <div className='no'>
            <img src={star} alt=''/>
            <span>(25)</span>
            </div> 
            </div>
            {/* <p>{pl.}</p> */}
            <div className='colorsm'>
            <div className='c1'></div>
            <div className='c2'></div>
            <div className='c3'></div>
            </div>
            <div className='buto'>
            <div className='barshop'>
            <NavLink> <FaSearchPlus  size={25}  style={{backgroundColor:'white'}}/></NavLink>
            <NavLink> <TbArrowsShuffle size={25}  style={{backgroundColor:'white'}}/></NavLink>
            <NavLink> <FaHeart size={25}  style={{backgroundColor:'white'}} /> </NavLink>
            </div>
            <div className='totalprice'>  <h3>Total product :{ pl.cartQuatity}</h3>
            <h3> total price:${ pl.price * pl.cartQuatity}</h3></div>
            </div>
            </div>
            </div> ))
    }
   </div>  
   <div className='slideshop scart' > <div className='opshop'> <h3>NEW COLLECTION</h3>
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
        </section>
        <Session8home/> 
        <Footer/>
        <Scrollh/>
    </Fragment>
    }
    </Fragment>
  )
}

export default Cartshop