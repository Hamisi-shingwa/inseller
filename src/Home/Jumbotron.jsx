import React from 'react'
import { SelectItems } from '../profile/users/userHooks/select_Items'

export default function Jumbotron() {
  const {Categories, Locations} = SelectItems()
return (
<div className='jumbotron'>
<div className='select'>
  <select name="" id="">
    <option value="">Sort by Category</option>
     {Categories && Categories.map(category=>{
      return(
        <option key={category.id} value={category.name}>{category.name}</option>
      )
     })}
  </select>
   
</div>

<div className='jumbotron-desktop-search'>
    <input className='search-container-input' type="text" placeholder='Searching...'/>
</div>
<div className='select'>
<select name="" id="">
    <option value="">Sort by Location</option>
     {Categories && Categories.map(category=>{
      return(
        <option key={category.id} value={category.name}>{category.name}</option>
      )
     })}
  </select>
</div>
</div>
)
}
