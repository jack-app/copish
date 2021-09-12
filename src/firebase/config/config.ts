// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1qkHZejYlW8jByDqXz3BSKfRH39cqc3s",
  authDomain: "copish-bd260.firebaseapp.com",
  projectId: "copish-bd260",
  storageBucket: "copish-bd260.appspot.com",
  messagingSenderId: "581685762974",
  appId: "1:581685762974:web:f6bf7c9afffab5d5dd148f",
  measurementId: "G-JB3599F360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export {firebaseConfig, app}