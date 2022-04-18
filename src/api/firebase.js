import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBD0gGuYj3EWr8zapc2JgN3jmTACqHg644",
  authDomain: "kate-app-chat.firebaseapp.com",
  databaseURL:
    "https://kate-app-chat-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kate-app-chat",
  storageBucket: "kate-app-chat.appspot.com",
  messagingSenderId: "152057161354",
  appId: "1:152057161354:web:73ade679c8167e0cd36f73",
  measurementId: "G-88DZLRZVN3",
};

export const firebase = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
