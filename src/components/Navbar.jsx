import React from 'react'
import { Link } from 'react-router-dom'
import "./componentStyles/navbar.css"

function Navbar() {
  return (
    <div>
        <ul>
            <li><Link className='a' to="/">Home</Link></li>
            <li><Link className='a' to="/products">Our Products</Link></li>
        </ul>
    </div>
  )
}

export default Navbar