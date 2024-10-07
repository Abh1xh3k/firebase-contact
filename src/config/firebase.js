// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYV1uuNTtvofj7WXgn5S8PaKZwNUQgYwI",
  authDomain: "crud-firebase-10f85.firebaseapp.com",
  projectId: "crud-firebase-10f85",
  storageBucket: "crud-firebase-10f85.appspot.com",
  messagingSenderId: "177704939930",
  appId: "1:177704939930:web:f8669015f7123a7f6a0a23"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db= getFirestore(app)