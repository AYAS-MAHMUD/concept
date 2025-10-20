// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3L50nuqZwIdsGit1gkPOyKTXkjEdp0B8",
  authDomain: "dragon-news-4d071.firebaseapp.com",
  projectId: "dragon-news-4d071",
  storageBucket: "dragon-news-4d071.firebasestorage.app",
  messagingSenderId: "404437957329",
  appId: "1:404437957329:web:f77be60d0ea3c9f125a3f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {app,auth}