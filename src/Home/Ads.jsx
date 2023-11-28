import React,{useState,useEffect,useContext} from 'react'
import men from '../images/men.jpg'
import {Link, useNavigate} from 'react-router-dom' 
import { ProductData } from './DataContext/products'
export default function Ads() {

    const navigate = useNavigate()
    const {products} = useContext(ProductData)



    useEffect( ()=>{
    //   getfirestoreData()
    },[])


 const showTime = (product)=>{
  const chars = product.timestamp.toDate().toLocaleString().slice(0,9).split('/')
  if(chars[1].length==2){
    return product.timestamp.toDate().toLocaleString().slice(0,10)
  }
  else{
    return product.timestamp.toDate().toLocaleString().slice(0,9)
  }
 
 }
  

   
  return (
    <div className='parent-add-container'>
         <div className='top-user-ads ads-header'>{products && products.length ? (
         <div className="ads"> Availabe Trending adds</div>
         ):null}</div>
        <div className='user-products'>

   {products &&products.length ? ( 
      products.map(product=>{ 
        // console.log(product.timestamp.toDate().toLocaleString().slice(0,9))
        return(
            <div className='ads-container' key={product.id}>
            {/* <Link to='product_detail'> */}
           <div className='product-image' onClick={()=>navigate(`/product_detail/${product.id}`)}><img src={product.image1} alt=''/></div>
           <div className='product-location rounded-for-item-legth'>{`1`}</div>
           <div className='product-name-time'>
           <div className='product-name'>{product.title}</div>
           <div className='uploaded-on'>{showTime(product)}</div>
           </div>
           <div className='product-price'>
               <div className='price'>Price</div> 
               <div className='amount'>{product.price}</div>
               </div> 
            {/* </Link> */}
           {/* <button className='jumbotron_button'>Shop now</button> */}
           </div>
        )
      })
   ):(
     <div className="noProduct">
      <div className="isLoading">
        <div className="isLoading-element"></div>
      </div>
     </div>
   )}
      
       
      
       
       
 
      
 
      

     </div>
    </div>
  )
}
