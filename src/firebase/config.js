
import  firebase from "firebase/app"
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCRv4Sv-B9KQ25gD9fe1C0Xt2dVWTXBGOs",
    authDomain: "personal-gallery-f21cb.firebaseapp.com",
    projectId: "personal-gallery-f21cb",
    storageBucket: "personal-gallery-f21cb.appspot.com",
    messagingSenderId: "291911989268",
    appId: "1:291911989268:web:5204895d8fdb19d48a0f01"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  export{projectStorage,projectFirestore,timestamp}