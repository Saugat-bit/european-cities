import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfXoG2bDzdKmTYUjbua6pxYmQ5gNaShKo",
  authDomain: "european-cities-explorer.firebaseapp.com",
  projectId: "european-cities-explorer",
  storageBucket: "european-cities-explorer.firebasestorage.app",
  messagingSenderId: "701000583232",
  appId: "1:701000583232:web:2a09e4d2de9bbcee91f7a5",
  measurementId: "G-PJTTD7KWFR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
