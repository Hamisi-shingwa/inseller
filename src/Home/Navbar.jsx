import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo/logo2.png'


export default function Navbar() {
  const handleClick = (e)=>{
    e.preventDefault()
    let hiden = document.getElementById('hidedView')
    hiden.classList.toggle('media-aside-view')
  }
  return ( 
    <>
    <div className='navbar'>
      <div className='logo'><img src={logo} alt=''/></div>
      <div className="aside">
      <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/register'>post</Link>
      </div>

      <div onClick={handleClick} className="svg" id='svg'><svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/></svg></div>
	
      <div className="media-aside" id='hidedView'>
      <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/register'>post</Link>
      </div>
      </div>
    </>
  )
}
