import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {

    apiKey: "AIzaSyAgvXDmILo_m5gslVYn6BM4e90myusXz54",
  
    authDomain: "olx-clone-9235b.firebaseapp.com",
  
    projectId: "olx-clone-9235b",
  
    storageBucket: "olx-clone-9235b.appspot.com",
  
    messagingSenderId: "429667036399",
  
    appId: "1:429667036399:web:dc9beff06f3983906b7f1a",
  
    measurementId: "G-FFMH88N4TE"
  
  };

  export default  firebase.initializeApp(firebaseConfig)