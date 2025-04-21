// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1_WUa_3dnWzfFqKo4yIJ9MmP1E6_H0Ko",
  authDomain: "flashcard-a535b.firebaseapp.com",
  projectId: "flashcard-a535b",
  storageBucket: "flashcard-a535b.firebasestorage.app",
  messagingSenderId: "754480959522",
  appId: "1:754480959522:web:04bf56f8a04c3fdd827a7b",
  measurementId: "G-D70G8SCN1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);