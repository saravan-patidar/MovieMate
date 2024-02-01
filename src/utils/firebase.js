// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA_vYl7O2-WFS-3SNjHRbDao2QNWlRpI_o",
  authDomain: "netflix-gpt-78.firebaseapp.com",
  projectId: "netflix-gpt-78",
  storageBucket: "netflix-gpt-78.appspot.com",
  messagingSenderId: "507563102961",
  appId: "1:507563102961:web:6bdb4dfe8eada6af8d4f50",
  measurementId: "G-BX2Z8P2D2G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
