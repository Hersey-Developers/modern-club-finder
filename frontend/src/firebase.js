// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkKNKUgLLEmgpCIDlxKNIVP9bSVOmyGY0",
  authDomain: "jhhs-club-finder.firebaseapp.com",
  projectId: "jhhs-club-finder",
  storageBucket: "jhhs-club-finder.appspot.com",
  messagingSenderId: "919987420666",
  appId: "1:919987420666:web:c835dedb55a8bf21cb3843",
  measurementId: "G-T9RV9L5QXP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
