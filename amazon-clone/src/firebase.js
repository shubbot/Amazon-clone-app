import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB2jSA1zzOZAtNCTvfcZg0zx7VscYfj7vI",
    authDomain: "challenge-d611a.firebaseapp.com",
    projectId: "challenge-d611a",
    storageBucket: "challenge-d611a.appspot.com",
    messagingSenderId: "760444885428",
    appId: "1:760444885428:web:8e905d58beaa9c725e7ae1",
    measurementId: "G-EZJXZYP6PT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};