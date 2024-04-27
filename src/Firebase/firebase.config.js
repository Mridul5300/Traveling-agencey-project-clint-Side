// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnAAYFdzMY5HCqMdyXhBhbc4TnJWZWRFU",
  authDomain: "traveling-website-projec-ad7fe.firebaseapp.com",
  projectId: "traveling-website-projec-ad7fe",
  storageBucket: "traveling-website-projec-ad7fe.appspot.com",
  messagingSenderId: "163374393785",
  appId: "1:163374393785:web:48aa6b79017ebf5f272e68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;