import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBLrtzKj7hQN12UFuacp3Bq6LlTh92mPZ4",
  authDomain: "lucid-700ed.firebaseapp.com",
  projectId: "lucid-700ed",
  storageBucket: "lucid-700ed.appspot.com",
  messagingSenderId: "193769964263",
  appId: "1:193769964263:web:8a88dd47b9a1a410f95842"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore()
export const storage = getStorage(app)