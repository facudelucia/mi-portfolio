import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0aeYSRvkeJGqLi0ZWDpdBUOuzBsPiWA0",
    authDomain: "mi-portfolio-8b1a9.firebaseapp.com",
    databaseURL: "https://mi-portfolio-8b1a9.firebaseio.com",
    projectId: "mi-portfolio-8b1a9",
    storageBucket: "mi-portfolio-8b1a9.appspot.com",
    messagingSenderId: "213853486755",
    appId: "1:213853486755:web:c37acb033c384c086d4916"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  const db = firestore.collection("contactData")

  export {db, firestore, firebase}