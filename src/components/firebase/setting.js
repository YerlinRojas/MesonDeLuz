


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBqnRwc9CZ2ohAFw9xVOm5SiNCtqiK8wNA",
  authDomain: "mesondeluz-85273.firebaseapp.com",
  projectId: "mesondeluz-85273",
  storageBucket: "mesondeluz-85273.appspot.com",
  messagingSenderId: "242814216289",
  appId: "1:242814216289:web:9fc1c30918b74a53ad2220"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


