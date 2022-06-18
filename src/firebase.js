import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDEB30_KCHkP6GjW9lXAyjyzOi0ewlEYU4",
  authDomain: "netflix-clone-ebcd3.firebaseapp.com",
  projectId: "netflix-clone-ebcd3",
  storageBucket: "netflix-clone-ebcd3.appspot.com",
  messagingSenderId: "796640496991",
  appId: "1:796640496991:web:ef70bca77b5c05970b7aea",
  measurementId: "G-WD8GSPLT08",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
