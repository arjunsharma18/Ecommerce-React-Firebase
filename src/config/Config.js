import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCIQH62I0Zs9BvMMPgg9kSpMhgkB8yeEMk",
    authDomain: "ecommerce-react-firebase-417f7.firebaseapp.com",
    projectId: "ecommerce-react-firebase-417f7",
    storageBucket: "ecommerce-react-firebase-417f7.appspot.com",
    messagingSenderId: "913717832644",
    appId: "1:913717832644:web:1369c61409f9da8df35291"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }