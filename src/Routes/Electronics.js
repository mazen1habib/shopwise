import React, { Fragment } from 'react'
import Nav from './Nav'
import Footer from '../Components/Footer/Footer'
import Session8home from '../Components/Home/Session8home'
import Section1ele from '../Components/Electtonics/Section1ele'
const Electronics = () => {
  return (
    <Fragment>
        <Nav/>
        <Section1ele/>
        <Session8home/>
        <Footer/>
    </Fragment>
  )
}

export default Electronics