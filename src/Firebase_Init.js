// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHR03ilpYe__YhdvNWFvCjhGdTMxXLKaU",
    authDomain: "fabricate-ecom.firebaseapp.com",
    projectId: "fabricate-ecom",
    storageBucket: "fabricate-ecom.appspot.com",
    messagingSenderId: "853779702262",
    appId: "1:853779702262:web:0d54370236a1574d5127d7",
    measurementId: "G-FHYN29Q2PE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);