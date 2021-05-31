import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-Hqry56xrhn8h-R5isc21oua8jEitkfQ",
    authDomain: "instagram-clone-fa1ba.firebaseapp.com",
    projectId: "instagram-clone-fa1ba",
    storageBucket: "instagram-clone-fa1ba.appspot.com",
    messagingSenderId: "644565757067",
    appId: "1:644565757067:web:5fbb8b65f3716ff4f2f88e",
    measurementId: "G-93Q90DCW27"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;
