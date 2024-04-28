import React, { Fragment } from 'react'
import {  useSelector } from 'react-redux'
const Session1singlepro = () => {
  const singleproduct = useSelector((state)=>state.cart.s)
  console.log(singleproduct);
  return (
    
    <Fragment>
<h1>single</h1>
    </Fragment>
  )
}

export default Session1singlepro