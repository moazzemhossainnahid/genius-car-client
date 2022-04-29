// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT6zhVTFhZir1UFQqr7BvRYzHmEv_dS8I",
  authDomain: "genius-car-services-569ce.firebaseapp.com",
  projectId: "genius-car-services-569ce",
  storageBucket: "genius-car-services-569ce.appspot.com",
  messagingSenderId: "979162522831",
  appId: "1:979162522831:web:4023c649c12dd92c6b03ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
