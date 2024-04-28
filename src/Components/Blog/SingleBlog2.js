import React, { Fragment } from 'react'
import img1 from '../images/pexels-shvets-production-6974791.jpg'
import img2 from '../images/pexels-alena-shekhovtcova-6995882.jpg'
import { NavLink } from 'react-router-dom'
const SingleBlog2 = () => {
  return (
    <Fragment>
         <div className='scrat1'>
  <div class="input-container">
  <input type="text" name="text" className="input" placeholder="search..."/>
  <span class="icon"> 
    <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  </span>
</div>
  <div className='slideshop scart' > <div className='opshop'> <h3>NEW COLLECTION</h3>
   <h1>
SALE 60% OFF</h1><NavLink to={'/shop'}> <button class="c-button c-button--gooey" > Shop Now
  <div class="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  </div>
</button>
</NavLink>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display: 'block', height: '0px', width: '0px'}}>
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
      <feBlend in="SourceGraphic" in2="goo"></feBlend>
    </filter>
  </defs>
</svg></div> <img src={img1} alt=''/></div>
 <div className='slideshop scart' > <div className='opshop'> <h3>NEW COLLECTION WOMAN</h3>
   <h1>
SALE 50% OFF</h1> <NavLink to={'/'}> <button class="c-button c-button--gooey"> Shop Now
  <div class="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  </div>
</button>
</NavLink>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display: 'block', height: '0px', width: '0px'}}>
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
      <feBlend in="SourceGraphic" in2="goo"></feBlend>
    </filter>
  </defs>
</svg></div> <img src={img2} alt=''/></div> </div>
    </Fragment>
  )
}

export default SingleBlog2