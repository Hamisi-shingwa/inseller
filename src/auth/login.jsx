import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import "bootstrap/dist/css/bootstrap.css"

// import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        // User creation successful
      navigate("/addpost")
          
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
      setEmail('')
      setPassword('')
  };

  return (
    <>
     <div className="form-container">
        <div className="title">Login Form</div>
     <form onSubmit={handleSubmit} className='form-control'>
        <label htmlFor="Email">Email</label>
        <input type="email" value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className='form-input d-block w-100'
        />

        <label htmlFor="Password">Password</label>
        <input type="password" value={password} 
        onChange={(e) => setPassword(e.target.value)}
        className='form-input d-block w-100'
        />
        <input type="submit" value="Login" className='w-100 bg-primary border-0 submit'/>
      </form>
      {error && <div className="error">{error}</div>}
     </div>
     <div className="available-link">
        <div className="d-flex mt-2">
            <div className="description">Dont have account ?</div>
            <Link to="/register">Click here to register</Link>
        </div>
     </div>
    </>
  );
}

export default Login;
