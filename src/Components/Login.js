import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
   const[signInForm, setSignInForm] = useState(true);

   const toggleSignForm = ()=> {
         setSignInForm(!signInForm);
   }

  return (
  <div>
    <Header/>
    <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
              alt= "Bg-logo"
        />
    </div>
    
    <form className='absolute mx-auto my-32 left-0 right-0 p-12 bg-black w-3/12 bg-opacity-80 rounded-sm'>

      <h1 className='font-bolder text-white text-3xl py-4'>
          {signInForm ? "Sign In" : "Sign Up"}
         </h1>

      {!signInForm && (
        <div>
         <input className="p-2 my-4 w-full h-12 rounded-sm bg-blue-950 text-white"
            type="text"
            placeholder="First Name"
         />
         <input className="p-2 my-4 w-full h-12 rounded-sm bg-blue-950 text-white"
            type="text"
            placeholder="Last Name"
         />
       </div> 
       
      )}   
         

      <input className="p-2 my-4 w-full h-12 rounded-sm bg-blue-950 text-white"
         type="text"
         placeholder="Email Id"/>
      <input className="p-2 my-4 w-full h-12 rounded-sm bg-blue-950 text-white"    
         type="password" 
         placeholder="Password"/>

      <button className="bg-red-700 text-white rounded-md font-bold w-full mt-4 h-10">
      {signInForm ? "Sign In" : "Sign Up"} 
      </button>

     {signInForm && (
      <div>
         
         <h3 className='text-white text-center my-2'>
            {signInForm ? "OR" : ""} 
         </h3>
         
         <button className='font-bold w-full rounded-md bg-slate-500 text-white my-1 h-10'>
            {signInForm ? "Use a sign-in code" : ""} 
         </button>
         
         <h3 className='text-white text-center my-2'>
         Forget Password?
         </h3>
         
      </div>

     )}
     
      <p className='text-white py-4 cursor-pointer'
           onClick={toggleSignForm} 
            >
          {signInForm ? "New to Netflix? Sign up now." : "Already Registered? Now Sign in."} 
       </p>
      
     </form>  
      
  </div>  
      
   )
}
       
    

export default Login;