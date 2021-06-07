import "@firebase/app";
import firebase from "@firebase/app";
import "@firebase/firestore";



var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAih-dKFwsxsfNhN5UbEh03pQIGJmXSZbQ",
    authDomain: "cvweb-96ec1.firebaseapp.com",
    projectId: "cvweb-96ec1",
    storageBucket: "cvweb-96ec1.appspot.com",
    messagingSenderId: "620637856183",
    appId: "1:620637856183:web:fa731c17e04222b02b4832"
});

var db = firebaseApp.firestore();

export { db };