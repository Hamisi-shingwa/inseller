import React,{useState} from 'react'
import { auth} from '../firebaseConfig';
import {Link,useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "bootstrap/dist/css/bootstrap.css"


export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [cpassword, setComfirmedPass] = useState("")
    const [error, setError] = useState("")

     const navigate = useNavigate()
    

    const handelSubmit = (e)=>{
      e.preventDefault();
      //first let check if passowrd is same
        if( password != cpassword) {
           setError("Password do not match")}
      else{
         //Then let us register his/her
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
         // const user = userCredential.user;
  
        // sendEmailVerification(user)
        //   .then(() => {
        //     console.log('Email verification sent');
        //   })
        //   .catch((error) => {
        //     setError(error.message);
        //     console.log(error.message);
        //   });
       //Then after to register his or her lets now navigate him to login
       navigate("/")
      }).catch(error=>{
        setError(error.message)
      })

      }
     
    }
  return (
    <div className='form-container'>
        <div className="title">Registration Form</div>
        <form onSubmit={handelSubmit} className="form-control">
            <label className='d-flex' htmlFor="Email">Email</label>
            <input type="email" value={email}
             onChange={(e)=>setEmail(e.target.value)}
             className='form-input d-block w-100'
             />

            <label htmlFor="password">Password</label>
            <input type="password"  value={password} 
              onChange={(e)=>setPassword(e.target.value)}
              className='form-input d-block w-100'
            />

            <label htmlFor="password">Retype-Password</label>
            <input type="password"  value={cpassword} 
              onChange={(e)=>setComfirmedPass(e.target.value)}
              className='form-input d-block w-100'
            />

            <input type="submit" value="Register"  className='w-100 bg-primary border-0 submit'/>
        </form>
        {error && <div className="error">{error}</div>}
     <div className="available-link">
        <div className="d-flex justify-content-between">
            <div className="description">Already have accout ?</div>
            <Link to="/">Click here to Login</Link>
        </div>
     </div>
       
    </div>
  )
}
