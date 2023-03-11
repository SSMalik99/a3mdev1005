// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChDYNZQ25o1Kw_t1PUnPaqXFI8MWvMdug",
  authDomain: "a3-m1005.firebaseapp.com",
  projectId: "a3-m1005",
  storageBucket: "a3-m1005.appspot.com",
  messagingSenderId: "482433044937",
  appId: "1:482433044937:web:f2f791ec694f4bf33b5818",
  // databseUrl: "https://a3-m1005-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const localApp =  initializeApp(firebaseConfig);

const LocalAuth = getAuth(localApp);

const firebaseDb = getDatabase(localApp)

export  {LocalAuth, localApp, firebaseDb}