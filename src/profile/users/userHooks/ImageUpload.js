import React, { useState } from "react";
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { storage } from "../../../firebaseConfig";


// Custom hook for handling image uploads
export const HandlerUploaderImage = () => {
  const [uploadError, setUploadError] = useState(null);
  const [imageLoader, setImageLoader] = useState(false);
  const [storageRef, setStorageRef] = useState(null)
 
  var uploadedRef = null

  const HandleUpload =async (file, displayURL) => {
   
    if (file) {
      setImageLoader(true);
      const fileSize = file.size / 1024; // Size in KB
      const minSize = 600; // Minimum size in KB
      const maxSize = 3000; // Maximum size in KB

      if (fileSize < minSize) {
        setImageLoader(false);
        setUploadError("The file size is too small. Please upload a file with a size greater than 600KB and less than 3MB.");
      } else if (fileSize > maxSize) {
        setImageLoader(false);
        setUploadError("The file size is too large. Please upload a file with a size greater than 600KB and less than 3MB.");
      } else {
        const extensionAcceptable = extensionHandler(file);
        if (extensionAcceptable) {
          showImage(file, displayURL);
          uploadedRef = await UploadingFile(file)
          console.log(uploadedRef)
        }
      }
    }
  };

  // Function that handles the URL for the selected image
  const showImage =  (image, element) => {
    const url = URL.createObjectURL(image);
    element.classList.remove('d-none');
    element.querySelector('img').src = url;
    setImageLoader(false);
  };

  // Handle file extension
  const extensionHandler = (image) => {
    const acceptableExtensions = ['jpg', 'jpeg', 'png'];
    const imgExtension = image.name.split('.').pop().toLowerCase();
    if (acceptableExtensions.includes(imgExtension)) {
      return true;
    } else {
      setUploadError(`${imgExtension} format is not accepted. Only JPG or PNG formats are accepted.`);
      setImageLoader(false);
      return false;
    }
  };


  //Handle uploading file function
  const UploadingFile = async (uploadedImage)=>{
    //Check if image was uploaded
    if(uploadedImage){
        // console.log(uploadedImage)
        // then create reference
        const storageRef = ref(storage, `productImages/${new Date().getHours()}`)
        //then let us upload an image first
            try{
         await uploadBytes(storageRef, uploadedImage)
         const imageUrl = await getDownloadURL(storageRef);
         //Check if am got storage ref
         if(imageUrl){
         return imageUrl
         }
         //if no image url obtained
         else{
            setUploadError("fails to capture image reference")
            return false
         }  
            }
             catch(err){
                console.log(err.message)
             }

    }else{
        setSubmisionError("Please upload image of your product then proceed")
        setSubmisionLoader(false)
        return false
    }

}

  return { HandleUpload, uploadError, setUploadError, imageLoader, setImageLoader,  uploadedRef };
};
