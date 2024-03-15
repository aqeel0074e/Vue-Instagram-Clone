import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD3Fbimk4Z34iqjIZYheajSvZHf09ZROdU",
  authDomain: "sociocord-e7514.firebaseapp.com",
  projectId: "sociocord-e7514",
  storageBucket: "sociocord-e7514.appspot.com",
  messagingSenderId: "969640648108",
  appId: "1:969640648108:web:ea12801e14e1fa8423ae09",
  measurementId: "G-BR4L4XZ99K"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export {
    auth,
    storage,
    db
}

