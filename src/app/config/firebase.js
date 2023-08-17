import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgiLw2nRh6cP79TC9Ek9ao59abS1AJWuA",
  authDomain: "edoobingo-92866.firebaseapp.com",
  projectId: "edoobingo-92866",
  storageBucket: "edoobingo-92866.appspot.com",
  messagingSenderId: "595620282026",
  appId: "1:595620282026:web:80b98bdbd2dde69af6dad3"
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

