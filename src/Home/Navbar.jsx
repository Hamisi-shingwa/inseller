import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo/logo2.png'


export default function Navbar() {
  const handleClick = (e)=>{
    e.preventDefault()
    let hiden = document.getElementById('navbar-hiden')
    hiden.classList.toggle('navbar-hiden2')
  }
  return ( 
    <>
    <div className='navbar'>
      <div className='logo'><img src={logo} alt=''/></div>
      <div className='aside'>
          <Link to='/'>Home</Link>
          <a href='/' className='services' onClick={handleClick}>Services</a>
          <Link to='/'>AbouteUs</Link>
          <Link to='/login'>Login</Link>
      </div> 
      <div className='link'>
          <a href='/'>Post</a>
          <Link to='/register'>signup</Link>
          <a href='/'>Carts</a>
      </div>
    </div>
    <div className='navbar-hiden' id="navbar-hiden" >
      <div className='navbar-none'></div>
    <div className='hiden-link'>
          <a href='/'>Post</a>
          <Link to='/register'>signup</Link>
          <a href='/'>Carts</a>
      </div>
      </div>
    </>
  )
}
