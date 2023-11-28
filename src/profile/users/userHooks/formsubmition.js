  import React, { useEffect, useState } from "react";
  import { getAuth } from "firebase/auth";
  import { auth, storage, db } from "../../../firebaseConfig";
  import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
  import { addDoc, collection, updateDoc, doc, query, where, getDocs } from "firebase/firestore";

  export const FormDatas = () => {
    const [submisionLoader, setSubmisionLoader] = useState(null);
    const [submisionError, setSubmisionError] = useState(null);
    const [uploadError, setUploadError] = useState(null);
    const [imageLoader, setImageLoader] = useState(false);
    const [userAuth, setUserAuth] = useState('')
    const [productPosted, setProductPosted] = useState(false)
  
  
    const [datas, setDatas] = useState({
      Material: '',
      category: '',
      color: '',
      createdBy: '',
      description: '', 
      image1: '', // Image URL will be stored here
      location: '',
      negotiatible: '',
      phone: '',
      price: '',
      title: '',
      type: '',
      productID:'',
      timestamp: new Date()
    });

  
    const handleChange = (e) => {
      // Handle other input fields
       setDatas(prevData => ({ ...prevData, [e.target.id]: e.target.value }));
    
    }

    const dataSubmision = async () => {
      try {
       const docRef =  await addDoc(collection(db, 'products'),datas);
       if (docRef.id) {
        const auth = getAuth()
        const user = auth.currentUser
        await updateDoc(doc(db,'products',docRef.id),{
          createdBy:user.uid,
          productID: docRef.id
        })

        //Then stop loading and other operation
        setSubmisionLoader(false);
        setDatas({
          Material: '',
          category: '',
          color: '',
          createdBy: '',
          description: '',
          image1: '', // Image URL will be stored here
          location: '',
          negotiatible: '',
          phone: '',
          price: '',
          title: '',
          type: '',
        });
        setProductPosted(true)
        //call show image uinspected
        
      }
       
      } catch (error) {
        console.error(error.message);
        setSubmisionError("Failed to submit data");
      }
    }

    

      // Handle form upload method now is below
      const HandleUpload = async (file, imgDisp) => {
        if (file) {
          setImageLoader(true);
          const fileSize = file.size / 1024; // Size in KB
          const minSize = 30; // Minimum size in KB
          const maxSize = 3000; // Maximum size in KB

          if (fileSize < minSize) {
            setImageLoader(false);
            setUploadError("The file size is too small. Please upload a file with a size greater than 30KB and less than 3MB.");
            return false;
          } else if (fileSize > maxSize) {
            setImageLoader(false);
            setUploadError("The file size is too large. Please upload a file with a size greater than 30KB and less than 3MB.");
            return false;
          } else {
            const extensionAcceptable = extensionHandler(file);
            if (extensionAcceptable) {
            
              console.log(file)
            const url =  await UploadingFile(file); // <--- Here it is!
            console.log(url)
              // Set the image in datas
              setDatas(prevData => ({ ...prevData, image1: url }));
            
              showImage(file, imgDisp);
              // Call the UploadingFile function here to upload the file to Firebase storage
              return true;
            }
          }
        }
      };    

      // Function that handles the URL for the selected image
      const showImage = (image, element) => {
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

      // Handle uploading file function
      const UploadingFile = async (uploadedImage) => {
        // Check if image was uploaded
        if (uploadedImage) {
          // then create reference
          const uniqueIdentifier = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}`
          const storageRef = ref(storage, `productImages/${uniqueIdentifier}`);
          // then let us upload an image first
          try {
            await uploadBytes(storageRef, uploadedImage);
            const imageUrl = await getDownloadURL(storageRef);
            console.log(imageUrl)
      
            // Check if we got the storage ref
            if (imageUrl) {
              return imageUrl;
            } else {
              setUploadError("Failed to capture image reference");
              return false;
            }
          } catch (err) {
            console.log(err.message);
          }
        } else {
          setSubmisionError("Please upload an image of your product and then proceed");
          setSubmisionLoader(false);
          return false;
        }
      }

      const  handleProductSubmitedMsgDisplay = (element)=>{
       setTimeout(()=>{
        if(element) element.style.display = "none"
       })
      }

      const handleSubmision = async (e) => {
        e.preventDefault();
        setSubmisionLoader(true)
        dataSubmision()
        
      }

      return {
        datas,
        setDatas,
        handleChange,
        handleFormSubmission: dataSubmision,
        handleSubmision,
        submisionLoader,
        setSubmisionLoader,
        submisionError,
        setSubmisionError,
        HandleUpload,
        uploadError,
        setUploadError,
        imageLoader,
        setImageLoader,
        productPosted,
        handleProductSubmitedMsgDisplay
      
      }
    }
