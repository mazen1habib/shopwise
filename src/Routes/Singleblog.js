import React, { Fragment, useEffect, useState} from 'react'
import Session8home from '../Components/Home/Session8home'
import Footer from '../Components/Footer/Footer'
import Nav from './Nav'
import './css/Singleblog.css'
import Scrollh from './Scrollh';
import SingleBlog2 from '../Components/Blog/SingleBlog2';
import SingleBlog1 from '../Components/Blog/SingleBlog1'
import SingleBlogmain from '../Components/Blog/SingleBlogmain'
import Slide1up from '../Components/Singleproduct/Slide1up'
const Singleblog = () => {
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
 looding1 ?<div className='loader1'> <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
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
<SingleBlog1/>
<section className='singleblog1'>
<SingleBlogmain/>
<SingleBlog2/>
</section>
<Session8home/>
<Footer/>
<Scrollh/> 
    </Fragment>
    }
    </Fragment>
  )
}

export default Singleblog