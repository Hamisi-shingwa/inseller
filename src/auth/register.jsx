import React,{useState} from 'react'
import { auth} from '../firebaseConfig';
import {Link,useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "bootstrap/dist/css/bootstrap.css"
import back from '../images/back.png'



export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [cpassword, setComfirmedPass] = useState("")
    const [error, setError] = useState("")
    const [isLoading,setIsloading] = useState(false)

     const navigate = useNavigate()
    

    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(password)
      console.log(cpassword)
      setIsloading(true)
      //first let check if passowrd is same
        if( password != cpassword) {
           setError("Password do not match")
           setIsloading(false)
          }
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
       navigate("/login")
      }).catch(error=>{
        if(error.code=="auth/user-not-found"){
          setError("invalid credential");
        }else if(error.code=="auth/weak-password"){
         setError("Please provide strong password include number and character")
        }
        else{
          setError("some thing wrong")
          console.log(error.message)
        }
      //  console.log(error.code)
        
        setIsloading(false)
      });
      setEmail('')
      setPassword('')
    

      }
     
    }
  return  (
    <div className='register-container'>
    
    <div className='register-top'>
        <Link to='/' className='register-Content-first'><img src={back} alt=''/></Link>
        <div className='register-Content'>Sign Up</div>
        <Link to='/login' className='register-Content-third'>SignIn</Link>
    </div>
    
    <form className='register-form' onSubmit={handleSubmit}>
  
    <label>Email Address</label>
        <input
        className='form-input'
        id="email"
        type='email'
        placeholder='Email Adress'
        onChange={(e)=>{
          setEmail(e.target.value)
          setError('')
        }}
    />
    
    <label>Password</label>
        <input
        className='form-input'
        id="password"
        type='password'
        placeholder='Strong Password(eg ABCabc@12)'
        onChange={(e)=>{
          setPassword(e.target.value)
          setError('')
        }}
    />
    <label>Confirm your password</label>
        <input
        className='form-input'
        id="cpassword"
        type='password'
        placeholder='Re-type your password'
        onChange={(e)=>{
          setComfirmedPass(e.target.value)
          console.log(cpassword)
          setError('')
        }}
    />
    <input type='submit' value="Signup"  className='form-input-submit'/>
    {error && (
      <div className='error'>{error}</div>
    )}
    
    <div className='middle-register'>
       <div className='middle-register-signup'>
        <div className='middle-register-qstion'>Arleady have an account</div>
        <Link to='/login' className='middle-register-link'> Sign In</Link>
      </div>
    <div className='middle-register-password-reset'>
        {/* <div className='middle-register-qstion'>Forgot your password</div>
        <Link to='/register' className='middle-register-link'>Reset it</Link> */}
      </div>
    </div>
    
    </form>
    
    
    {isLoading ? (
         <div className='isLoading'>
         <div className='isLoading-element'></div>
         </div>
     ):(
      null
     )}
    
     <div className='form-footer'>
     <div className='form-footer-element'>Powerd by AmyCs</div>
     </div>
    </div>
    )
}
