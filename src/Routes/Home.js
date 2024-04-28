import React, { Fragment, useEffect, useState } from 'react'
import Nav from './Nav'
import Session1home from '../Components/Home/Session1home'
import Session2home from '../Components/Home/Session2home'
import Session3home from '../Components/Home/Session3home'
import Session4home from '../Components/Home/Session4home'
import Session5 from '../Components/Home/Session5'
import Session6home from '../Components/Home/Session6home'
import Session7home from '../Components/Home/Session7home'
import Session8home from '../Components/Home/Session8home'
import Footer from '../Components/Footer/Footer'
import '../Components/Looding/looding.css'
import Scrollh from './Scrollh'
import Slide1up from '../Components/Singleproduct/Slide1up'
const Home = () => {
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
      <Session1home/>
      <Session2home/>
      <Session3home/>
      <Session4home/>
      <Session5/>
      <Session6home/>
      <Session7home/>
      <Session8home/>
       <Scrollh/>
      <Footer/>
    </Fragment>
    }
    </Fragment>
  )
}

export default Home