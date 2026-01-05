import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "chris-laundry.firebaseapp.com",
  projectId: "chris-laundry",
  storageBucket: "chris-laundry.appspot.com",
  messagingSenderId: "372809625180",
  appId: "1:372809625180:web:eacd752af604a928b20099",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);