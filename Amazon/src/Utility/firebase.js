import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth';
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDF1CqlDbaN3AP8A-PTROPr8ZGei3GZntY",
  authDomain: "website-clone-e104e.firebaseapp.com",
  projectId: "website-clone-e104e",
  storageBucket: "website-clone-e104e.firebasestorage.app",
  messagingSenderId: "708474189269",
  appId: "1:708474189269:web:e5511d2864c30d7bd0f95c"
};


const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();