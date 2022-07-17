import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/analytics";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVKKKr5T22Bh_5OMLRfTDEIGPKv2HKHEI",
  authDomain: "frugalitybookv1-13c25.firebaseapp.com",
  projectId: "frugalitybookv1-13c25",
  storageBucket: "frugalitybookv1-13c25.appspot.com",
  messagingSenderId: "232059972430",
  appId: "1:232059972430:web:a095ed8de9b0b17b6dcc1f",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const fireStore = firebase.firestore(); // database
const fireStorage = firebase.storage();
const fireAuth = firebase.auth();

export {
  fireStore, // Database
  fireStorage, // storage
  fireAuth, // authentication
  firebase,
};

// Server Side Rendering (SSR)

//JS => REACTJS => NextJS
