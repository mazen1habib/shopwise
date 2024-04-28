import React, { Fragment, useEffect, useState } from 'react'
import Session1Blog from '../Components/Blog/Session1Blog'
import Nav from './Nav'
import Scrollh from './Scrollh'
import Session8home from '../Components/Home/Session8home'
import Footer from '../Components/Footer/Footer'
import Session2Blog from '../Components/Blog/Session2Blog'
import Slide1up from '../Components/Singleproduct/Slide1up'
const Blog = () => {
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
   <Session1Blog/>
   <Session2Blog/>
   <Session8home/>
   <Footer/>
   <Scrollh/>
   </Fragment>
    }
    </Fragment>
  )
}

export default Blog