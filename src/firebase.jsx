// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import firebase from 'firebase';

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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

const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const analytics = getAnalytics(app);
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;