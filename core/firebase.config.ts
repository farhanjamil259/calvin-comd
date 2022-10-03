import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqYFxzCFKRSRswu77sbgdkEFNoS_iJNKM",

  authDomain: "xpress-alloys.firebaseapp.com",

  projectId: "xpress-alloys",

  storageBucket: "xpress-alloys.appspot.com",

  messagingSenderId: "71021168932",

  appId: "1:71021168932:web:3ee03478b467c47fb5cbb1",

  measurementId: "G-BYD31QFYVW",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
export const db = firebase.firestore();
