// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhUB9TfQj9oos21xzcnxfxnic1x0Yp1eo",
  authDomain: "yuva-kendr-pushp-details.firebaseapp.com",
  projectId: "yuva-kendr-pushp-details",
  storageBucket: "yuva-kendr-pushp-details.firebasestorage.app",
  messagingSenderId: "296422692598",
  appId: "1:296422692598:web:6e24302f6972908857fed7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;