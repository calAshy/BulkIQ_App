// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJedbXUCmAkqkikt73_4XlH1jjdXEuuWY",
  authDomain: "bulkiqapp.firebaseapp.com",
  projectId: "bulkiqapp",
  storageBucket: "bulkiqapp.firebasestorage.app", // IMPORTANT!! chatgpt reckons this has an issue but i do not want to change it.
  messagingSenderId: "769478007293",
  appId: "1:769478007293:web:b55cebc915410b1985a194",
  measurementId: "G-31DN2KZVXB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth
const auth = getAuth(app);

export { auth };
