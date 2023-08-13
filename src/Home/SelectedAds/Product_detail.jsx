import React,{useEffect,useState} from 'react'
import './Description_Style.css'
import Navbar from '../Navbar'
import Big from '../../images/large/f1.jpg'
import f1 from '../../images/large/f2.jpg'
import f2 from '../../images/large/f3.jpg'
import f3 from '../../images/large/3.jpg'
import Contact from '../../images/contact.png'

export default function Product_detail() {

  function handleImage(){
      let uimage = document.querySelector('.uimage')
      let dimages = document.querySelectorAll('.dimage')
      dimages.forEach(dimage=>{
          dimage.onclick = (e)=>{
           uimage.src = e.target.src

          }
      })
      
      
  }

  function handleContact(){
  let clicked = document.querySelector('.clicked-contact')
  let input = document.querySelector('.Telinput')

  clicked.addEventListener('click',()=>{
    clicked.style.display = 'none'
    input.style.display = 'inline'
  })
  
  }
  useEffect(()=>{
    handleImage()
    handleContact()
  },[])
  return (
    <div className='description-container'> 
      <Navbar/>
     <div className='description_category'>
        Electronics
     </div>

    <div className='product-element'>
       <div className='products-image'>
         <div className='big-image'><img className='uimage' src={Big} alt=''/></div>
         {/* <div className='other-image'>
          <div className='f-image '><img className='dimage' src={f1} alt=''/></div>
          <div className='s-image ' ><img className='dimage' src={f2} alt=''/></div>
          <div className='t-image '><img className='dimage' src={f1} alt=''/></div>
         </div> */}
      </div>


      <div className='product-description'>
        <div className='Product_name'>Here is where product name will be</div>
        <div className='posted-duration'>
         {`12-1-2023 Daresalaam`} 
        </div>
        <div className='product-amount'>Tsh 750000</div>
        <div className='small-descriptioon'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
     A deleniti aliquid vel voluptatibus sequi veniam quisquam 
     neque beatae voluptatum quibusdam <br/>expedita rem optio, 
    perferendis laborum sed consectetur labore, ipsam hic.
        </div>

        <div className='product-man-contact'>
                   <div className='Show-contact'>
                     <img className='cont-image' src={Contact} alt=''/>
                   </div>
                   <div className='Number-contact'>
                    <div className='clicked-contact'>Show contact</div>
                    <input type='tel' value='0245412753' className='Telinput'/>
                    </div>
        </div>


      </div>
    </div>
    
    <div className='product-info'>More details</div>
    <div className='structured-details'>

      <div className='description-parent'>
            <div className='description-title'>Posted by</div>
            <div className='details-fortitle'>Name of poster</div>
      </div>

      <div className='description-parent'>
            <div className='description-title'>Posted on</div>
            <div className='details-fortitle'>12-3-2023</div>
      </div>

      <div className='description-parent'>
            <div className='description-title'>Brand</div>
            <div className='details-fortitle'>Intel</div>
      </div>

      <div className='description-parent'>
            <div className='description-title'>Model</div>
            <div className='details-fortitle'>Hp bxl v12</div>
      </div>

      <div className='description-parent'>
            <div className='description-title'>Dispay size</div>
            <div className='details-fortitle'>13inch</div>
      </div>
    </div>

    </div>
  )
}
