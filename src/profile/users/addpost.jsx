import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { SelectItems } from './userHooks/select_Items'
import { HandlerUploaderImage } from './userHooks/ImageUpload'
import { FormDatas } from './userHooks/formsubmition'
import "bootstrap/dist/css/bootstrap.css"
import  "../../css/users/post.css"
import  "../../css/users/media.css"
import Topoutnav from './userComponets/topoutnav'
import Outnavbar from './userComponets/outnavbar'



export default function Addpost() {

//Lets as all necessary  hooks 
const {Categories, Locations} = SelectItems()
// const {HandleUpload, uploadError, setUploadError, imageLoader,setImageLoader} = HandlerUploaderImage() //handleUploadedfile
const {datas,setDatas,handleChange,handleSubmision,
  submisionLoader,submisionError,HandleUpload, uploadError, setUploadError,
   imageLoader} = FormDatas()//formDatahandler_Hooks
  

//Load Necessary element once component is loaded
useEffect(() => {
  //check if user is authenticated
  const imageElement = document.querySelector('.imageElement');
  const imageFile = document.getElementById('imageFile'); 
  const  imageDisplay = document.querySelector('.imageDisplay')
  
 
  handleImage(imageFile,imageElement,imageDisplay)

}, [ ]);

const handleImage = (imageFile,imageElement,imgDisp)=>{
    imageElement.onclick = ()=> {
      imageFile.click() 
      setUploadError(false)
      imgDisp.classList.contains('d-done') ? false :  imgDisp.classList.add('d-none')
    }
    imageFile.onchange = (e)=> HandleUpload(e.target.files[0],imgDisp)   
}                        


  return (
    <div className='post_formContainer'>
      <Topoutnav/>
      <Outnavbar/>
  {/* first let create our form here   */}
   <form onSubmit={handleSubmision} >

{/* The left display element */}
  <div className="mondatory-info">

     {/* Select for a list of categories */}
  <select name="select" id="category" className='select bg-white' onChange={handleChange}  required>
    <option value="">Choose category</option>
     {Categories.map(category=>{
      return(
       <option value={category.name} key={category.id}>{category.name}</option>
      )
     })}
   </select>


{/* Select from list of Region */}
<select name="select" id="location" className='select bg-white' onChange={handleChange}  required>
    <option value="">Select Location</option>
     {Locations.map(location=>{
      return(
       <option value={location.name} key={location.id}>{location.name}</option>
      )
     })}
   </select>


{/* Bellow is box for upload file of a product 
this is card that wrapp up to 6 element within
*/}
<div className="file-uploadContainer card text-start ">
 <div className="card-header">Add photo</div>
 <div className="card-subtitle text-info font-sm">Now you can add only one photo</div>
 <div className="card-detail">
 Please add a clear, non-blurry photo to enhance the attractiveness of your product.
 </div>
<div className="text-start">
   <input type="file" id='imageFile' className='d-none'/>
   <div className="handleImage d-flex position-relative">
     <div className="btnelement text-info imageElement w-25">+</div>
     <div className="btnelement bg-primary  w-25 mx-5 imageDisplay d-none">
      <img src="" alt="uploaded" className='img-fluid' />
     </div>

     {/* Preloader element */}
     {imageLoader && (
       <div className="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center  preloaderElement">
       <div className="pre-loader"></div>
    </div>
     )}

   </div>
   <div className="card-detail">Suprted format are jpg,png, 3MB max</div>
    {uploadError && (
       <div className="image-upload-error text-danger">
         {uploadError}
    </div>
    )}
</div>
</div>

<input type="text" 
id='title' placeholder='title*'
 value={datas.title}
 onChange={handleChange}
 required
 />
</div>







{/* Right side display an element */}
<div className="other-details-on-right-side">

 <div className="row otherdetailsrow ">
  <div className="col-lg-6 firstElement-on-otherDetails">
      <input type="text" 
       id='type'
       placeholder='type*'
       value={datas.type}
       onChange={handleChange}
       required
      />

    <input type="text" 
       id='Material'
       placeholder='Material'
       value={datas.Material}
       onChange={handleChange}
       required
      />
      
    <input type="text" 
       id='color'
       placeholder='color'
       value={datas.color}
       onChange={handleChange}
       required
      />

  </div>

  <div className="col-lg-6 secondElement-on-otherDetails ">
  <input type="number" 
       id='phone'
       placeholder='phone*'
       value={datas.phone}
       onChange={handleChange}

       required
      /> 

  <input type="text" 
       id='price'
       placeholder='Tsh price'
       value={datas.price}
       onChange={handleChange}
       required
      />
     <div className="negotiable d-flex align-items-center justfy-content-center">
     <label className='mx-2 text-secondary '>Negotiable ?</label>
      <input type="checkbox" 
      className='bg-white'
      onClick={(e) => setDatas({...datas, negotiatible: e.target.checked })}
      />
     </div>
     </div> 

     {/* TextArea for descripition */}
     <textarea
      value={datas.description} 
       id="description"
       placeholder='description*'
       className='bg-white border-0 '
       onChange={handleChange}
       required
      >

     </textarea>
 </div>
{/* lets us submit the form */}
<div className="submit position-relative">
<input type="submit" className='btn-primary text-light'/> 
 {submisionLoader && (
  <div className="mother-submit-loader position-absolute top-0 right-0 bg-primary ">
  <div className="pre-loader"></div>
</div>
 )}
</div>
 {submisionError && (
  <div className=" d-grid  text-danger submision-error-element">{submisionError}</div>
 )}
</div>

   </form>
    </div>
  )
}
