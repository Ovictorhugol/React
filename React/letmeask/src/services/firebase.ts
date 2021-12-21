import firebase from 'firebase/compat/app';

import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyAbNZcSEmH_rEgSWx0MNc77kEwrXYDwNiw",
    authDomain: "letmeask-d41ae.firebaseapp.com",
    databaseURL: "https://letmeask-d41ae-default-rtdb.firebaseio.com",
    projectId: "letmeask-d41ae",
    storageBucket: "letmeask-d41ae.appspot.com",
    messagingSenderId: "440758560204",
    appId: "1:440758560204:web:7648b02db218dab6cea969"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();