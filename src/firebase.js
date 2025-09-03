// src/firebase.js

// Import Firebase core
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ Firestore import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1Y_yBG4ALIkL-yzilA7X6ZtPq3Zvxmnk",
  authDomain: "glammedbyluchi.firebaseapp.com",
  projectId: "glammedbyluchi",
  storageBucket: "glammedbyluchi.firebasestorage.app",
  messagingSenderId: "339510739066",
  appId: "1:339510739066:web:c58b778d403519da4d3bc3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore
const db = getFirestore(app);

// ✅ Export db so other files can use it
export { db };
