// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHoJch8PEb2B8RRGS0xdAe2x4B1llH4IY",
  authDomain: "time-app-7c66c.firebaseapp.com",
  projectId: "time-app-7c66c",
  storageBucket: "time-app-7c66c.appspot.com",
  messagingSenderId: "117456464264",
  appId: "1:117456464264:web:648ab5be679bb59687323d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;
