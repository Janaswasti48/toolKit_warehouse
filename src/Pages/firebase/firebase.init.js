// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCoN9kg4y-1KgAUjwCF-EsAkng8vTosacE",
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: "1:198874999470:web:e4a0a152df6db6c499db3f",
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };


const firebaseConfig = {
  apiKey: "AIzaSyCoN9kg4y-1KgAUjwCF-EsAkng8vTosacE",
  authDomain: "warehouse-bb470.firebaseapp.com",
  projectId: "warehouse-bb470",
  storageBucket: "warehouse-bb470.appspot.com",
  messagingSenderId: "198874999470",
  appId: "1:198874999470:web:e4a0a152df6db6c499db3f",
  measurementId: "G-DXH4KCDQWR"
};
// console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth