import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth }  from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGaY30V5tInmvEFu-7m1tcVFx749PEA0w",
  authDomain: "todo-redux-firebase-25b54.firebaseapp.com",
  projectId: "todo-redux-firebase-25b54",
  storageBucket: "todo-redux-firebase-25b54.appspot.com",
  messagingSenderId: "136708602209",
  appId: "1:136708602209:web:07cffb83cd990db60e2d20",
  measurementId: "G-V6B4PMNTNR"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);