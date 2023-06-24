import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAuI31Aa61q9qwZxeuUsUoTAUNS6pNu1WY",
  authDomain: "fire-course-78a5f.firebaseapp.com",
  projectId: "fire-course-78a5f",
  storageBucket: "fire-course-78a5f.appspot.com",
  messagingSenderId: "67981900567",
  appId: "1:67981900567:web:cd155d7eea05f817335552",
  measurementId: "G-ZZMFCRF7HW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
