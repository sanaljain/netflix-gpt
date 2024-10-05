// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkxJgM0uecH_dLxT1DxF4JIYraYEhFAMI",
  authDomain: "netflix-gpt-3aa8b.firebaseapp.com",
  projectId: "netflix-gpt-3aa8b",
  storageBucket: "netflix-gpt-3aa8b.appspot.com",
  messagingSenderId: "907523765216",
  appId: "1:907523765216:web:55cb732b59e33e7b087185",
  measurementId: "G-MQ91LZPMSB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
