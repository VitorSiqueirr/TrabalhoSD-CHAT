// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqzBSjJxwLQ4dI0ESTH9Vqw7CSRZbe2FQ",
  authDomain: "marciuschat.firebaseapp.com",
  projectId: "marciuschat",
  storageBucket: "marciuschat.appspot.com",
  messagingSenderId: "255506769482",
  appId: "1:255506769482:web:69edb94bfdf343e3fee8b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();;