import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import star from '../images/rating.png'
import './cssfurn/session3furn.css'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { cartslice } from '../../Cart/Cartslice';
import { FaSearchPlus } from "react-icons/fa";
const Session3Furn = () => {
    const [product ,setproduct] =useState([])
    const dispatch=useDispatch()
    const [x,setx] =useState(false)
    useEffect(()=>{
        axios.get(`https://api.escuelajs.co/api/v1/products`).then((res)=>setproduct(res.data)).catch((err)=>console.log(err))
    },[])
  return (
  <Fragment>
  <div className='consec3furn'>
  <div className='confurn3'>
  {

    product.map((el ,idx)=>(
          el.id>=28  && (el.id <=33 &&  (
            <div key={idx} className='pro'>
                <img src={el.images[0]} alt=''/>
                <h6>{el.title}</h6>
                <div className='consec31' key={el.id} onMouseMove={()=>{ setx(true)}}> 
                { 
                
                    x? (<div className='buo' onMouseLeave={()=>{ setx(false)}}> 
                    <Link onClick={()=>{dispatch(cartslice.actions.addtofurn(el))}}  class="bn3">Add to Cart</Link>
                  <NavLink  onClick={()=>{dispatch(cartslice.actions.addtosingleproduct({name:el.title,price:el.price,title:el.description,image:el.images[0]})) } }>  <Link to={`/shop/${el.title}`}> <FaSearchPlus size={30}  /></Link>  </NavLink> 
                    </div>)
                    : ( <div>
                        <h3> ${el.price} <span> $200</span> </h3>
                <div className='stadiv'>
                <img src={star} alt='' className='star'/>
                </div>
                </div>)
                }
                </div>
            </div>
          ))
    ))
  }
  </div>
</div>
  </Fragment>
  )
}

export default Session3Furn