
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/analytics"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpAgoaGXwsWGETqEeiYsglcokZekce0Og",
  authDomain: "frugality-book-ecc18.firebaseapp.com",
  projectId: "frugality-book-ecc18",
  storageBucket: "frugality-book-ecc18.appspot.com",
  messagingSenderId: "817396535065",
  appId: "1:817396535065:web:05cdaa64a31238e5bbff88",
  measurementId: "G-TBDCQ7KFG8"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
const fireStore = firebase.firestore();// database
const fireStorage = firebase.storage();
const fireAuth = firebase.auth();


export {
  fireStore,// Database
  fireStorage,// storage
  fireAuth, // authentication 
  firebase, 
}

// Server Side Rendering (SSR)

//JS => REACTJS => NextJS