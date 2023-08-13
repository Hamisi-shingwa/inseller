import React from 'react'
import jiko from '../images/search.png'

export default function Search() {
  return (
    <div className='search'>
    <div className='search_container'></div>
     <div className='search_bar'>
          <div className='search_image'><img src={jiko} alt=''/></div>
          <input type='text' className='search_input' placeholder='Searching...'/>
      </div>
      <div className='search_content'>
          <div className='welcome'>Welcome to InSeller</div>
          <div className='below_welcome'>
              <span className='yellow_span'></span>since 2022
              <span className='yellow_span'></span>let's us anounce your business
          </div>
      </div>
     
     </div>
      
  
  )
}
