import React, { Fragment, useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import { MdOutlineLocalPolice } from "react-icons/md";
import './css/singleproduct.css'
import img from '../Components/images/rating.png'
import Nav from './Nav'
import Session8home from '../Components/Home/Session8home'
import Footer from '../Components/Footer/Footer'
import { MdOutlineRestartAlt } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { Link, useParams } from 'react-router-dom';
import Slide1up from '../Components/Singleproduct/Slide1up';
const Singleproduct = () => {
  const [resize ,setresize]=useState(false)
  window.addEventListener('resize',(e)=>{
    let size = e.currentTarget.innerWidth
     size <= 941 ? setresize(true) :  setresize(false)
  })
  const singleproduct = useSelector((state)=>state.cart.singleproduct.image)
  const [looding1 ,setlooding] =useState(false)
  useEffect(()=>{
    setlooding(true)
    setTimeout(()=>{
      setlooding(false)
    },5000)
  } ,[])
  const x =useParams(e=>e)
  console.log(x);
  return (
    <Fragment>
    {
 looding1 ? <div className='loader1'> <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
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
   <Slide1up/>
   <Nav/>
    <section className='conssinglepro' style={ resize ? { width :'300px' ,height:'500px'} :undefined  } >
    <div className='consigle1' style={ resize ? { width :'300px' ,height:'500px'} :undefined  } >
     <img src={singleproduct.image} alt=''/>
     <div className='datasingleproduct' style={ resize ? { width :'300px' ,height:'300px'} :undefined  }>
      <h1>{singleproduct.name}</h1>
      <div className='pd'> 
      <div className='hy'>
      <h1>{singleproduct.price}  </h1>
      <h2>$200</h2>
      <h3>40%  off</h3>
      </div>
      
       <div className='im'>
       <img src={img} alt=''/>
       <h6>(25)</h6>
       </div>
      
      </div>
      <p>{singleproduct.title}</p>
      <h4> <MdOutlineLocalPolice />  1 Year AL Jazeera Brand Warranty </h4>
      <h4><MdOutlineRestartAlt /> 30 Day Return Policy</h4>
      <h4> <TbMoneybag /> Cash on Delivery available</h4>
       <div className='buoi'>
        <Link to={'/shop'} class="btn41-43 btn-42" > Back</Link>
        </div>
     </div>
    </div>
    </section>
    <Session8home/>
    <Footer/>
   </Fragment>
    }
    </Fragment>
  )
}

export default Singleproduct
