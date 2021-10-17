// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEpTVttO8xbp3Hk1Xo2upK2YWxPviEA7o",
  authDomain: "tiendamoncia.firebaseapp.com",
  projectId: "tiendamoncia",
  storageBucket: "tiendamoncia.appspot.com",
  messagingSenderId: "953492591977",
  appId: "1:953492591977:web:a416e3a683b8e57071d9f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db