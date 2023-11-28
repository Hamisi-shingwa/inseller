import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { auth } from '../../firebaseConfig'
import { query, collection, where, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import './Description_Style.css'
import Navbar from '../Navbar'
import Big from '../../images/large/f1.jpg'
import f1 from '../../images/large/f2.jpg'
import f2 from '../../images/large/f3.jpg'
import f3 from '../../images/large/3.jpg'
import Contact from '../../images/contact.png'

export default function Product_detail() {

  const [datas, setDatas] = useState(null)

  const {id} = useParams()
  console.log(id)

  function handleImage(){
      let uimage = document.querySelector('.uimage')
      let dimages = document.querySelectorAll('.dimage')
      dimages.forEach(dimage=>{
          dimage.onclick = (e)=>{
           uimage.src = e.target.src

          }
      })
      
      
  }

  const getfirestoreData = async () => {
    try {
      const fetchedData = [];
      const querySnapshot = await getDocs(query(collection(db, 'products'), where('productID', '==', id)));
      
      querySnapshot.forEach(doc => {
        const data = doc.data();
        fetchedData.push({ id: doc.id, ...data });
      });
  
      if (fetchedData.length > 0) {
        setDatas(fetchedData);
      } else {
        // Handle case where no data is found
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  



  function handleContact(){
  let clicked = document.querySelector('.clicked-contact')
  let input = document.querySelector('.Telinput')

  if(clicked && input){
    clicked.addEventListener('click',()=>{
      clicked.style.display = 'none'
      input.style.display = 'inline'
    })
    
  }
  }
  useEffect(()=>{
    // handleImage()
    getfirestoreData()
    handleContact()
  },[])
  return (
    <div className='description-container'> 
      <Navbar/>
      {datas && datas.map(data=>{
        return (
          <>
           <div className='description_category'>
       {data.category}
     </div>

    <div className='product-element'>
       <div className='products-image'>
         <div className='big-image'><img className='uimage' src={data.image1} alt=''/></div>
         {/* <div className='other-image'>
          <div className='f-image '><img className='dimage' src={f1} alt=''/></div>
          <div className='s-image ' ><img className='dimage' src={f2} alt=''/></div>
          <div className='t-image '><img className='dimage' src={f1} alt=''/></div>
         </div> */}
      </div>
      {console.log(datas)}

      <div className='product-description'>
        <div className='Product_name'>{data.title}</div>
        <div className='posted-duration'>
         {`${data.timestamp.toDate().toLocaleString().slice(0,9)} ${data.location}`} 
        </div>
        <div className='product-amount'>{`Tsh ${data.price}`}</div>
        <div className='small-descriptioon'>
        {data.description}
        </div>

        <div className='product-man-contact'>
                   <div className='Show-contact'>
                     <img className='cont-image' src={Contact} alt=''/>
                   </div>
                   <div className='Number-contact'>
                    <div className='clicked-contact'>Show contact</div>
                    <input type='tel' value={data.phone} className='Telinput'/>
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
            <div className='description-title'>Contact</div>
            <div className='details-fortitle'>{data.phone}</div>
      </div>

      <div className='description-parent'>
            <div className='description-title'>Posted on</div>
            <div className='details-fortitle'>{data.timestamp.toDate().toLocaleString().slice(0,9)}</div>
      </div>

      <div className='description-parent'>
            <div className='description-title'>Brand</div>
            <div className='details-fortitle'>{data.type}</div>
      </div>

      <div className='description-parent'>
            <div className='description-title'>Model</div>
            <div className='details-fortitle'>{data.type}</div>
      </div>

      <div className='description-parent'>
            <div className='description-title'>Color</div>
            <div className='details-fortitle'>{data.color}</div>
      </div>
    </div>
          </>
        )
      })}

    </div>
  )
}
