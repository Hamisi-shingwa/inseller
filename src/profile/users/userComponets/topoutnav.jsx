import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import logo from "../../../assets/logo/logo1.png"

export default function Topoutnav() {
  return (
    <div className='topoutnav d-flex justify-content-between align-items-center logo'>
      <div className="logo-image"><img src={logo} alt="" /></div>
      <div className="middle">Daima Sellers</div>
      <div className="some-info"></div>  
    </div>
  )
}
