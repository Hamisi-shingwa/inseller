import React,{useState, useEffect, createContext} from 'react'
import { db } from '../../firebaseConfig'
import {collection, query, getDocs, orderBy} from 'firebase/firestore'


export const ProductData = createContext()
 



export default function ProductsContext({children}) {
    const [products, setProducts] = useState(null)

    useEffect( ()=>{
        getfirestoreData()
      },[])
   
    //Lets us query alll available document to firestore
    const getfirestoreData = async ()=>{
     if(!products){
      const fetchedData = []
      try{
       const document =  query((collection(db, 'products')),orderBy('timestamp','desc'))
       const obtainedData = await getDocs(document)
       obtainedData.forEach(doc=>{
           const id = doc.id;
           const data = doc.data()
           fetchedData.push({id,...data})
       })
 
    
     //Chek if is there any data to firestore
     if(fetchedData.length > 0){
    setProducts(fetchedData)
     }else{
       //Here means no any data
     }
      }catch(err){
       console.log(err.message)
      }
     }
  }


  return (
    <ProductData.Provider value={{products, setProducts}}>
        {children}
    </ProductData.Provider>
  )
}
