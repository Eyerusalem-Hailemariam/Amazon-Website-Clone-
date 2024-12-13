import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDF1CqlDbaN3AP8A-PTROPr8ZGei3GZntY",
  authDomain: "website-clone-e104e.firebaseapp.com",
  projectId: "website-clone-e104e",
  storageBucket: "website-clone-e104e.firebasestorage.app",
  messagingSenderId: "708474189269",
  appId: "1:708474189269:web:e5511d2864c30d7bd0f95c"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);