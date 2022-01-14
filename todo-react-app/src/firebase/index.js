// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // add own firebaseConfig 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize getAuth 
export const auth = getAuth(app);

// Initialize db
export const db = getFirestore(app);