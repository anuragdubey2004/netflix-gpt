import { auth } from '../Utils/firebase';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch  } from "react-redux";
import { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import {addUser, removeUser} from '../Utils/userSlice';
import { LOGO_URL } from '../Utils/constants';

const Header = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut =()=> {
    signOut(auth)
      .then(() => {
      
    })
    .catch((error) => {

    });
  }

  useEffect(()=>{

    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser(
          { uid:uid, 
            email:email, 
            displayName: displayName,
            photoURL: photoURL}));

            navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
 
    // unsubscribe when component unmounts
    return(() => unsubscribe());
   },[]);

  return (
    <div className=" bg-gradient-to-b from-black absolute w-screen px-4 py-2 mx-0 my-0 z-10 flex justify-between">
        <img className="  w-38 h-24"

          src= {LOGO_URL}
          alt ="logo"
        />
        {user && (
          <div className="flex p-2">
          <img className="mx-2 w-16 h-16" alt= "user"
               src= {user?.photoURL}
               />
          <button className=" text-white font-bold bg-red-700 rounded-lg w-20 h-10 cursor-pointer mr-6 pr-2 "
            onClick= {handleSignOut}
            >Sign Out</button>
        </div>
        )} 
        
    </div>
    
  )
}

export default Header;