// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/";
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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);