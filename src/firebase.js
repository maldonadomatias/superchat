import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEAS1l2E21qLaOiXWEUSeJbgumu3F8SjA",
  authDomain: "superchat-4c71e.firebaseapp.com",
  projectId: "superchat-4c71e",
  storageBucket: "superchat-4c71e.appspot.com",
  messagingSenderId: "868369488643",
  appId: "1:868369488643:web:8c41f144eed04a2c2b6736",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
