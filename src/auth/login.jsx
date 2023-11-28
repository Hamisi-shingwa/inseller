import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import "bootstrap/dist/css/bootstrap.css"
import back from '../images/back.png'

// import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading,setIsloading] = useState(false)
 
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsloading(true)
    setError('')
    console.log(`${email}  and ${password}`)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential)
        // User creation successful
      navigate("/addpost") 
          
      })
      .catch((error) => {
        if(error.code=="auth/user-not-found"){
          setError("Wrong useremail or password");
        }else if(error.code=="auth/wrong-password"){
          setError("Wrong useremail or password")
        }
        else if(error.code=="auth/invalid-email"){
          setError("sorry re-type email and password correctly to proceed")
         
        }
        else{
         setError("some thing wrong ")
         console.log(error.message)
        }
       
        
        setIsloading(false)
      });
      setEmail('')
      setPassword('')
  };

  return (
    <div className='register-container'>
    
    <div className='register-top'>
        <Link to='/' className='register-Content-first'><img src={back} alt=''/></Link>
        <div className='register-Content'>Sign In</div>
        <Link to='/register' className='register-Content-third'>Join Free</Link>
    </div>
    <form className='register-form' onSubmit={handleSubmit}>
    
    
    <label>Email Address or Member ID</label>
        <input
        className='form-input'
        id="email"
        type='email'
        placeholder='Email Adress or Member ID'
        onChange={(e)=>{
          setEmail(e.target.value)
          setError('')
        }}

        required
    />
    
    <label>Password</label>
        <input
        className='form-input'
        id="password"
        type='password'
        placeholder='Valid password'
        onChange={(e)=>{
          setPassword(e.target.value)
          setError('')
        }}
        required
    />
    <input type='submit' value="Signin"  className='form-input-submit'/>
    {error && (
      <div className='error'>{error}</div>
    )}
    
    <div className='middle-register'>
      <div className='middle-register-signup'>
        <div>Don't have account</div>
        <Link to='/register' className='middleregister-link'> Sign Up</Link>
      </div>
      <div className='middle-register-password-reset'>
        {/* <div>Forgot your password</div>  */}
        {/* <Link to='/register' className='middle-register-link'>Reset it</Link> */}
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

export default Login;
