// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8DuTY7EXjmaPjew3HYFTIrWn0QpfiACA",
  authDomain: "uber-clone-d4e85.firebaseapp.com",
  projectId: "uber-clone-d4e85",
  storageBucket: "uber-clone-d4e85.appspot.com",
  messagingSenderId: "745853694173",
  appId: "1:745853694173:web:9cabd8aa11054e393cab34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
