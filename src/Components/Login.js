import React from 'react'
import Header from './Header'
import { useState , useRef} from 'react';
import { chechValidData } from '../Utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { USER_LOGO, BG_LOGO } from '../Utils/constants';



const Login = () => {
   const[signInForm, setSignInForm] = useState(true);
   const[errorMesssage, setErrorMessage] = useState(null);
   const dispatch = useDispatch();
   
   // const name = useRef(null);
   const fullName = useRef(null);
   const email = useRef(null); 
   const password = useRef(null);

   const toggleSignForm = ()=> {
         setSignInForm(!signInForm);
   }

   const handleButton = ()=>{
      
      const message = chechValidData(email.current.value, password.current.value, fullName.current ? fullName.current.value : '');
      
      setErrorMessage(message);
       if(message) return;

   if(!signInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
       
        const user = userCredential.user;
        updateProfile(user, {
         displayName: fullName.current.value,
            photoURL: USER_LOGO
       })
         .then(() => {
         const {uid, email, displayName, photoURL} = auth.currentUser;
         dispatch(
            addUser({
               uid: uid,
               email: email,
               displayName: displayName,
               photoURL: photoURL,
            })
         );
       
       }).catch((error) => {
            setErrorMessage(error.message);
       });
      //   navigate("/browse");   ####
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"- "+ errorMessage);
        // ..
      });
   }
   else{
      // Signin User
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"- "+ errorMessage);
  });
   }

      
       
   };
  return (
  <div>
    <Header/>
    <div className='absolute'>
        <img src={BG_LOGO}
              alt= "Bg-logo"
        />
    </div>
    
    <form onSubmit = {(e)=> e.preventDefault()}
     className='absolute mx-auto my-32 left-0 right-0 p-12 bg-black w-3/12 bg-opacity-80 rounded-sm'>

      <h1 className='font-bolder text-white text-3xl py-4'>
          {signInForm ? "Sign In" : "Sign Up"}
         </h1>

      {!signInForm && (
        <div>
         <input ref={fullName} className="p-2 my-4 w-full h-12 rounded-sm bg-blue-950 text-white"
            type="text"
            placeholder="Full Name"
         />
       </div> 
       
      )}   
         

      <input  ref={email}
         className="p-2 my-4 w-full h-12 rounded-sm bg-blue-950 text-white"
         type="text"
         placeholder="Email Id"/>
         
      <input  ref= {password}
         className="p-2 my-4 w-full h-12 rounded-sm bg-blue-950 text-white"    
         type="password" 
         placeholder="Password"/>

      <button className="bg-red-700 text-white rounded-md font-bold w-full mt-4 h-10"
        onClick={handleButton}>
      {signInForm ? "Sign In" : "Sign Up"} 
      </button>
        <div>
            <p className='text-red-700 font-bold text-lg py-2'>{errorMesssage}</p>
        </div>
       <p className="text-red">{errorMesssage}</p>

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