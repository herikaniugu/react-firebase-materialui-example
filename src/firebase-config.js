// src/firebase-config.js

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC8TaGNrf617MAI1VdNthH3H3F9ymhgR5g",
    authDomain: "react-firebase-materialui-8b24.firebaseapp.com",
    projectId: "react-firebase-materialui-8b24",
    storageBucket: "react-firebase-materialui-8b24.appspot.com",
    messagingSenderId: "977172591530",
    appId: "1:977172591530:web:6f659c1916989006dd71d3",
    measurementId: "G-C7Z06WCTGG"
});

const db = firebaseApp.firestore();

export { firebase, db };