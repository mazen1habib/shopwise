import React, { Fragment, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Session8home from '../Components/Home/Session8home';
import Footer from '../Components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { cartslice } from '../Cart/Cartslice';
import {  useSelector } from 'react-redux'
import Slide1up from '../Components/Singleproduct/Slide1up';
const Login = () => {
  const dispatch=useDispatch()
    const us=useSelector((state)=>state.cart.Register)
    console.log(us);
    const [user1,setuser1]=useState({
        Email1:'',
        password1:'',
      })
      const [looding1 ,setlooding] =useState(false)
  useEffect(()=>{
    setlooding(true)
    setTimeout(()=>{
      setlooding(false)
    },5000)
  } ,[])
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
        <section className='sec1about'>
        <h1>Login</h1>
      <h3>
        <NavLink to={'/'} > Home</NavLink>  <MdOutlineKeyboardArrowRight size={35} />  <h3 className='mp'>Login</h3>  
        </h3>
        </section>
        <section className='register'  style={{height:"80vh"}}>
    <div className='r1' style={{height:"60vh"}}>
    <h1>Create An Account</h1>
    <input type='email' placeholder='Enter Your Email' onChange={(e)=>setuser1({ ...user1,Email1:e.target.value})}  />
    <input type='password' placeholder='Password' onChange={(e)=>setuser1({...user1,password1:e.target.value})} />
    <div className='checki'>
    <div class="container">
    <input type="checkbox" id="cbx2" style={{display: 'none'}}/>
    <label for="cbx2" class="check">
        <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
        </svg>
    </label>
</div>
    <p>I agree to terms & Policy.</p>
    </div>
    {
        us.map(ol=>( 
            user1.Email1===ol.Email &&  user1.password1===ol.password &&
                <Link onClick={()=>{dispatch(cartslice.actions.addtouser({name:ol.name,email:ol.Email,address:ol.address,phone:ol.phone})) } } > <button className="bn-32 bn32"> <Link to={'/profile'}>login</Link>  </button>  </Link>       
    ))
    }
    </div>
    </section>
    <Session8home/>
    <Footer/>
    </Fragment>
    }
    </Fragment>
  )
}

export default Login