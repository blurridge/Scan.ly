// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7x775AlJhSZRLdaLO_1fOZY9KXSH_Rpg",
  authDomain: "scanly-app.firebaseapp.com",
  projectId: "scanly-app",
  storageBucket: "scanly-app.appspot.com",
  messagingSenderId: "320380167468",
  appId: "1:320380167468:web:e4f684202d70846f64b889",
  measurementId: "G-Q8052FR1SC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
