// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL7wZOeFuOVRXf10tM-fkPKP_EcN8useU",
  authDomain: "todo-react-app-c91dc.firebaseapp.com",
  projectId: "todo-react-app-c91dc",
  storageBucket: "todo-react-app-c91dc.appspot.com",
  messagingSenderId: "220385978245",
  appId: "1:220385978245:web:9526aa1c0be4c9c0f846ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize getAuth 
export const auth = getAuth(app);

// Initialize db
export const db = getFirestore(app);