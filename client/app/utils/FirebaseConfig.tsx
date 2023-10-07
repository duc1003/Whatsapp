
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDAtucQlniRz9kiTz_yxerPBR1hkPxYtGM",
    authDomain: "whasapp-f864b.firebaseapp.com",
    projectId: "whasapp-f864b",
    storageBucket: "whasapp-f864b.appspot.com",
    messagingSenderId: "526871594521",
    appId: "1:526871594521:web:b3ea26f8fd1a40ae71cc88",
    measurementId: "G-JT9N1KP8HZ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app); 