// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzuirO8vbIb1J816wj8vBWCDc9PitSR2s",
  authDomain: "todo-63987.firebaseapp.com",
  projectId: "todo-63987",
  storageBucket: "todo-63987.firebasestorage.app",
  messagingSenderId: "997196254909",
  appId: "1:997196254909:web:14309637958192cab1f1d4",
  measurementId: "G-0D4VN4PY6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;