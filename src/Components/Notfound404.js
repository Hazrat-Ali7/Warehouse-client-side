import React from 'react'
import { Link } from 'react-router-dom'

const Notfound404 = () => {
  return (
    <div className='not-found'>
      <h1> 404 Page Not Found  <Link to='/'>
       Home
       </Link>
       </h1>
       <Link to='/'>
       </Link>
    </div>
  )
}

export default Notfound404