// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD4oxXNJ3WwZ_mdzXMRUUstg3rGl5izaU",
  authDomain: "netflix-gpt-943d2.firebaseapp.com",
  projectId: "netflix-gpt-943d2",
  storageBucket: "netflix-gpt-943d2.appspot.com",
  messagingSenderId: "566172505237",
  appId: "1:566172505237:web:ec581c9386e2e33428f79c",
  measurementId: "G-V29HCREYTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();