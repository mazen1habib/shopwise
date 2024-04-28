import React, { Fragment } from 'react'
import NAvUp from '../Components/Nav/NAvUp'
import NavDown from '../Components/Nav/NavDown'

const Nav = () => {
  return (
  <Fragment>
    <header>
        <nav>
            <NAvUp/>
            <NavDown/>
        </nav>
    </header>
  </Fragment>
  )
}

export default Nav