// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {

  apiKey: "AIzaSyDWC9tf4-KT_RZGWRJqwbyEdQy16VZWk9Y",

  authDomain: "disneyplus-clone-630c7.firebaseapp.com",

  projectId: "disneyplus-clone-630c7",

  storageBucket: "disneyplus-clone-630c7.appspot.com",

  messagingSenderId: "69613278436",

  appId: "1:69613278436:web:3a6e5ab3b2a713725f08f1",

  measurementId: "G-P66CSYQ3DT"

};


// Initialize Firebase

const firebaseApp  = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider =  new GoogleAuthProvider();
const storage = getStorage();


export { auth, provider, storage };
export default db;