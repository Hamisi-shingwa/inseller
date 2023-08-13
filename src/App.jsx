import React from 'react';
import Home_main from './Home/Home_main';
import Login from './auth/login';
import Register from './auth/register';
import Dashbord from './profile/users/dashbord';
import Addpost from './profile/users/addpost'
import Product_detail from './Home/SelectedAds/Product_detail';

// import './css/index.css'
// import './css/App.css';   
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_main/>
  }, 
  {
    path:"/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/addpost",
    element: <Addpost/>  
  }, 
  {
    path: "/product_detail",
    element: <Product_detail/>  
  }, 
  {
    path: "/dashbord",
    element: <Dashbord/>   
  }
])


function App() {
 
  return (
    <>
     <RouterProvider router= {router}/>
    </>
  );
}

export default App;
