import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWcoxueJMa0vmQmOUGjxWwZ08-IhAGZMA",
    authDomain: "job-portal-be5ba.firebaseapp.com",
    projectId: "job-portal-be5ba",
    storageBucket: "job-portal-be5ba.firebasestorage.app",
    messagingSenderId: "892648781942",
    appId: "1:892648781942:web:87c3ebe13cb61aaefe0757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;