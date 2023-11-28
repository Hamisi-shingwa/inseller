import React, { Component } from 'react'
import Ads from './Ads'
import { Categories } from './Categories'
import Filter from './Filter'
import Footer from './Footer'
import Jumbotron from './Jumbotron'
import Navbar from './Navbar'
import ProductsContext from './DataContext/products'
import Search from './Search'
import '../css/style.css'
import '../css/mediastyle.css'

export default class Home_main extends Component {
  render() {
    return (
      <ProductsContext>
      <div className='Home'>
        {/* <Search/>  */}
        <Navbar/>
        <Jumbotron/>
        <Categories/>
        {/* <Filter/> */}
        <div className='media-ads'>
            <Ads/>
        </div >
        <Footer/>
      </div>
      </ProductsContext>
    )
  }
}
