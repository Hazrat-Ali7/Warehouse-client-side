// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyB4c88tMx5yv22uD4HTs0qmUwvSOvNZN9o",
    authDomain: "inverntory-management.firebaseapp.com",
    projectId: "inverntory-management",
    storageBucket: "inverntory-management.appspot.com",
    messagingSenderId: "304309445336",
    appId: "1:304309445336:web:a617ba152accc07b6a6dad"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth