import React from 'react'
import men from '../images/men.jpg'
import {Link, useNavigate} from 'react-router-dom' 
export default function Ads() {
    const navigate = useNavigate()
   
  return (
    <div className='parent-add-container'>
         <div className='top-user-ads ads-header'>Availabe Trending adds</div>
        <div className='user-products'>

    <div className='ads-container'>
        {/* <Link to='product_detail'> */}
       <div className='product-image' onClick={()=>navigate("/product_detail",{value:"Hellow man"})}><img src={men} alt=''/></div>
       <div className='product-location rounded-for-item-legth'>{`1`}</div>
       <div className='product-name-time'>
       <div className='product-name'>Lenoval-Thinkpad</div>
       <div className='uploaded-on'>{`3 min`}</div>
       </div>
       <div className='product-price'>
           <div className='price'>Price</div> 
           <div className='amount'>70000k</div>
           </div> 
        {/* </Link> */}
       {/* <button className='jumbotron_button'>Shop now</button> */}
       </div>
      
       
       <div className='ads-container'>
       <Link to='product_detail'>
       <div className='product-image'><img src={men} alt=''/></div>
       <div className='product-location rounded-for-item-legth'>{`1`}</div>
       <div className='product-name-time'>
       <div className='product-name'>Lenoval-Thinkpad</div>
       <div className='uploaded-on'>{`3 min`}</div>
       </div>
       <div className='product-price'>
           <div className='price'>Price</div>
           <div className='amount'>90000k</div>
           </div>
        </Link>
       {/* <button className='jumbotron_button'>Shop now</button> */}
       </div>
      
       <div className='ads-container'>
       <Link to='product_detail'>
       <div className='product-image'><img src={men} alt=''/></div>
       <div className='product-location rounded-for-item-legth'>{`1`}</div>
       <div className='product-name-time'>
       <div className='product-name'>Lenoval-Thinkpad</div>
       <div className='uploaded-on'>{`3 min`}</div>
       </div>
       <div className='product-price'>
           <div className='price'>Price</div>
           <div className='amount'>40000k</div>
           </div>
        </Link>
       {/* <button className='jumbotron_button'>Shop now</button> */}
       </div>
      
       
       <div className='ads-container'>
       <Link to='product_detail'>
       <div className='product-image'><img src={men} alt=''/></div>
       <div className='product-location rounded-for-item-legth'>{`1`}</div>
       <div className='product-name-time'>
       <div className='product-name'>Lenoval-Thinkpad</div>
       <div className='uploaded-on'>{`3 min`}</div>
       </div>
       <div className='product-price'>
           <div className='price'>Price</div>
           <div className='amount'>40000k</div>
           </div>
           </Link>
       {/* <button className='jumbotron_button'>Shop now</button> */}
       </div>
      
 
       <div className='ads-container'>
       <div className='product-image'><img src={men} alt=''/></div>
       <div className='product-location rounded-for-item-legth'>{`1`}</div>
       <div className='product-name-time'>
       <div className='product-name'>Lenoval-Thinkpad</div>
       <div className='uploaded-on'>{`3 min`}</div>
       </div>
       <div className='product-price'>
           <div className='price'>Price</div>
           <div className='amount'>40000k</div>
           </div>
       {/* <button className='jumbotron_button'>Shop now</button> */}
       </div>
      
 
       <div className='ads-container'>
       <div className='product-image'><img src={men} alt=''/></div>
       <div className='product-location rounded-for-item-legth'>{`1`}</div>
       <div className='product-name-time'>
       <div className='product-name'>Lenoval-Thinkpad</div>
       <div className='uploaded-on'>{`3 min`}</div>
       </div>
       <div className='product-price'>
           <div className='price'>Price</div>
           <div className='amount'>40000k</div>
           </div>
       {/* <button className='jumbotron_button'>Shop now</button> */}
       </div>
      

       <div className='ads-container'>
       <div className='product-image'><img src={men} alt=''/></div>
       <div className='product-location rounded-for-item-legth'>{`1`}</div>
       <div className='product-name-time'>
       <div className='product-name'>Lenoval-Thinkpad</div>
       <div className='uploaded-on'>{`3 min`}</div>
       </div>
       <div className='product-price'>
           <div className='price'>Price</div>
           <div className='amount'>40000k</div>
           </div>
       {/* <button className='jumbotron_button'>Shop now</button> */}
       </div>
      

       <div className='ads-container'>
       <div className='product-image'><img src={men} alt=''/></div>
       <div className='product-location rounded-for-item-legth'>{`1`}</div>
       <div className='product-name-time'>
       <div className='product-name'>Lenoval-Thinkpad</div>
       <div className='uploaded-on'>{`3 min`}</div>
       </div>
       <div className='product-price'>
           <div className='price'>Price</div>
           <div className='amount'>40000k</div>
           </div>
       {/* <button className='jumbotron_button'>Shop now</button> */}
       </div>

       
       <div className='ads-container'>
       <div className='product-image'><img src={men} alt=''/></div>
       <div className='product-location rounded-for-item-legth'>{`1`}</div>
       <div className='product-name-time'>
       <div className='product-name'>Lenoval-Thinkpad</div>
       <div className='uploaded-on'>{`3 min`}</div>
       </div>
       <div className='product-price'>
           <div className='price'>Price</div>
           <div className='amount'>40000k</div>
           </div>
       {/* <button className='jumbotron_button'>Shop now</button> */}
       </div>

       
       <div className='ads-container'>
       <div className='product-image'><img src={men} alt=''/></div>
       <div className='product-location rounded-for-item-legth'>{`1`}</div>
       <div className='product-name-time'>
       <div className='product-name'>Lenoval-Thinkpad</div>
       <div className='uploaded-on'>{`3 min`}</div>
       </div>
       <div className='product-price'>
           <div className='price'>Price</div>
           <div className='amount'>40000k</div>
           </div>
       {/* <button className='jumbotron_button'>Shop now</button> */}
       </div>
      
     </div>
    </div>
  )
}
