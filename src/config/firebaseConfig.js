import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyA7Y_C7THBLViHTMaDfdnisvfoJY8CDFEY",
  authDomain: "moringa-phase3-project-ars.firebaseapp.com",
  projectId: "moringa-phase3-project-ars",
  storageBucket: "moringa-phase3-project-ars.appspot.com",
  messagingSenderId: "34911496782",
  appId: "1:34911496782:web:8e3df6e445f8a845b9b11f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

