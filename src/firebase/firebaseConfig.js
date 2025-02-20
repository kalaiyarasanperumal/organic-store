import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4BM4lmkNF6Y8ie3_uOeDJYMDM43j53jk",
  authDomain: "organic-d9a56.firebaseapp.com",
  projectId: "organic-d9a56",
  storageBucket: "organic-d9a56.appspot.com",
  messagingSenderId: "697920667616",
  appId: "1:697920667616:web:bdda5a4accb1f4c9453585",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
