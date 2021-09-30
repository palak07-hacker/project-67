import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDzUrWLRYjuxygS-atTCO8E_c9tqWOC2ZU",
    authDomain: "open-source-project-67.firebaseapp.com",
    projectId: "open-source-project-67",
    storageBucket: "open-source-project-67.appspot.com",
    messagingSenderId: "576699692952",
    appId: "1:576699692952:web:2436058272f847a1bf9ded"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();