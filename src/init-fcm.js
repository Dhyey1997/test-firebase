import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
    // Project Settings => Add Firebase to your web app
    apiKey: "AIzaSyAzEv-1XaSIQRZvpAQ3sVzbdGh2nvTqK4Y",
    authDomain: "test-firebase-f4093.firebaseapp.com",
    databaseURL: "https://test-firebase-f4093.firebaseio.com",
    projectId: "test-firebase-f4093",
    storageBucket: "test-firebase-f4093.appspot.com",
    messagingSenderId: "896697974174",
    appId: "1:896697974174:web:235efdce2c778d2472ea8f",
    measurementId: "G-VY18KHJE98"
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
    // Project Settings => Cloud Messaging => Web Push certificates
    "BP8FeQYNbgEgTB-jjDMFoYl1Dn29J1dHgjBiMJ2tQK66keI89-jFCiNEexGhTH6GRhYQCzwy9fDClK7lX1Pdwss"
);

export { messaging };