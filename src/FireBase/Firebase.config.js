// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABeJXHXUKWN5XUr5RExyVoRASRyC1A7iY",
  authDomain: "starlit-tine-400406.firebaseapp.com",
  projectId: "starlit-tine-400406",
  storageBucket: "starlit-tine-400406.appspot.com",
  messagingSenderId: "567018571730",
  appId: "1:567018571730:web:e5e58e7985e5e4265a6a0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
