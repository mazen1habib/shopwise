import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import star from '../images/rating.png'
import './css/session3.css'
const Session3home = () => {
   const [product,setproduct]=useState([])
   const [x,setx] =useState(false)
    useEffect(()=>{
        axios.get(`https://mock.shop/api?query=%7B%20product(id%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F7982905098262%22)%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20cursor%20node%20%7B%20id%20title%20image%20%7B%20url%20%7D%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%7D`).then((res)=>setproduct(res.data.data.product.variants.edges)).catch((err)=>console.log(err))
    },[])
    const o =() =>{
     return product.map(ol=>(
      <div key={ol.id}   className='product' >
      <div className='imgrow'>
        <img src={ol.node.image.url} alt=''/>
        </div>
        <div className=' condata'>
        <h2>{ol.node.title}</h2>
        <h3> ${ol.node.price.amount} <span>$ 200</span> 40% off</h3>
        <div className='starg'>
         <img src={star} alt=''/> 
        </div>
        </div>
        </div>))
    }
  return (
  <Fragment>

  <div className='containersec3'>
  <h1>Exclusive Products</h1>
  <div className='clicksec3'>
    <ul>
        <li onClick={()=>{ setx(!x)
        }}> New Arrival</li>
        <li onClick={()=>{ setx(!x)
        }}> Best Sellers</li>
        <li onClick={()=>{ setx(!x)
        }}>Featured  </li>
        <li>Special Offer</li>
    </ul>
  </div>
  <div className='containerproduct'>
  { x?  o():undefined}
  </div>
  </div>
  </Fragment>
  )
}
export default Session3home