// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCawv3iqm3lDgqahst69Bgv6npgdaT9tZ4",
    authDomain: "uber-auth-178a4.firebaseapp.com",
    projectId: "uber-auth-178a4",
    storageBucket: "uber-auth-178a4.appspot.com",
    messagingSenderId: "533212971584",
    appId: "1:533212971584:web:a12d425e81300d128a15a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);