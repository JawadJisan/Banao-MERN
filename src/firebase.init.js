// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAD2eE7wY8QOsDTOvhs9Tp91v2r2khIhjE",
    authDomain: "banao-mern-445f4.firebaseapp.com",
    projectId: "banao-mern-445f4",
    storageBucket: "banao-mern-445f4.appspot.com",
    messagingSenderId: "583671346174",
    appId: "1:583671346174:web:0e40889d5654c066b6c6af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth