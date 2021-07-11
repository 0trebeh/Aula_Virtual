import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyATZEqLC9GKKqGzfVoSSyAQp_Mkm4e49mM",
    authDomain: "aula-virtual-38771.firebaseapp.com",
    projectId: "aula-virtual-38771",
    storageBucket: "aula-virtual-38771.appspot.com",
    messagingSenderId: "684037758003",
    appId: "1:684037758003:web:56a37dc4940bf62074d746"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const fs = firebase.firestore();