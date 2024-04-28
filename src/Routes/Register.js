import React, { Fragment, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './css/register.css'
import { useDispatch } from 'react-redux';
import { cartslice } from '../Cart/Cartslice';
import Session8home from '../Components/Home/Session8home';
import Footer from '../Components/Footer/Footer';
import Slide1up from '../Components/Singleproduct/Slide1up';
export const Register = () => {
  const dispatch=useDispatch()
  const [user,setuser]=useState({
    name:'',
    Email:'',
    address:'',
    phone:'',
    password:'',
    conpassword:''
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
        <h1>Register</h1>
      <h3>
  
        <NavLink to={'/'} > Home</NavLink>  <MdOutlineKeyboardArrowRight size={35} />  <h3 className='mp'>Register </h3>  
        </h3>
        </section>
    <section className='register'>
    <div className='r1'>
    <h1>Create An Account</h1>
    <input type='text' placeholder='Enter Your Name'  value={user.name} onChange={(e)=>setuser({...user,name:e.target.value})}/>
    <input type='email' placeholder='Enter Your Email' value={user.Email} onChange={(e)=>setuser({ ...user,Email:e.target.value})}/>
    <input type='text' placeholder='Address'  value={user.address} onChange={(e)=>setuser({...user,address:e.target.value})}/>
    <input type='text' placeholder='Phone Number'  value={user.phone} onChange={(e)=>setuser({...user,phone:e.target.value})}/>
    <input type='password' placeholder='Password' value={user.password} onChange={(e)=>setuser({...user,password:e.target.value})}/>
    <input type='password' placeholder='Confirm Password' value={user.conpassword} onChange={(e)=>setuser({ ...user,conpassword:e.target.value})}/>
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
   <Link onClick={()=>{dispatch(cartslice.actions.addtoregister(user)) } }>  <Link to={'/login'}><button className="bn-32 bn32" > Register </button> </Link></Link> 
    </div>
    </section>
    <Session8home/>
    <Footer/>
   </Fragment>
    }
    </Fragment>
  )
}
