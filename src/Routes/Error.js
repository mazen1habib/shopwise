import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './css/Error.css'
const Error = () => {
  return (
    <Fragment>
        <div className='errcon'>
            <h1>404</h1>
            <h2>oops! The page you requested was not found!</h2>
            <p>The page you are looking for was moved, removed, renamed or
            <br/> might never existed.</p>
            <Link to={'/'}><button className="bn-32 bn32">Back To Home</button></Link>
        </div>
    </Fragment>
  )
}

export default Error