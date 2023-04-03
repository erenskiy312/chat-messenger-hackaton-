import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBdr6tOflvlggf3TvG6wzOj7Fkb3oBOFc",
  authDomain: "chat-messenger-hackaton.firebaseapp.com",
  projectId: "chat-messenger-hackaton",
  storageBucket: "chat-messenger-hackaton.appspot.com",
  messagingSenderId: "613694515431",
  appId: "1:613694515431:web:3a51547736c2521e835a42"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth()
 export const storage = getStorage();
 export const db = getFirestore()