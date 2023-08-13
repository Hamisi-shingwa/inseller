import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: "inseller-dcac6.firebaseapp.com",
  projectId: "inseller-dcac6",
  storageBucket: "inseller-dcac6.appspot.com",
  messagingSenderId: import.meta.env.VITE_APP_MESSAGEID,
  appId: import.meta.env.VITE_APP_APIID,
  measurementId: "G-LSPS3SXSCR"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)  
const auth = getAuth(app)
export {auth,db,storage} 