import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"


export default function Outnavbar() {
  return (
    <div className='outnav navbar'>
        <div className='left-nav'></div>
        <div className='right-section d-flex justify-content-between'>
        <Link to="/">Home</Link>
        <Link to="">Login</Link>
        <Link to="">About</Link>
        <Link to="">Contact</Link>
        </div>

    </div>
  )
}
 