
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-c5dcc.firebaseapp.com",
  projectId: "interviewiq-c5dcc",
  storageBucket: "interviewiq-c5dcc.firebasestorage.app",
  messagingSenderId: "121717128701",
  appId: "1:121717128701:web:e4133661ce3205a4372d94"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}