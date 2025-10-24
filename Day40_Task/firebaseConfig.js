import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLcE3kFqQ1cdQQMdDVYAgOQk63HHnN5Xc",
  authDomain: "task-tracker-app-47b72.firebaseapp.com",
  projectId: "task-tracker-app-47b72",
  storageBucket: "task-tracker-app-47b72.firebasestorage.app",
  messagingSenderId: "26083383851",
  appId: "1:26083383851:web:164841fe1aa3392690686e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { app, db };