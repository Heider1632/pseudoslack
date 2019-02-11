import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
let config = {
  apiKey: "AIzaSyAFBShYCUTuBoVXFgrRuAlD5dAzTegVsCI",
  authDomain: "pseudoslack.firebaseapp.com",
  databaseURL: "https://pseudoslack.firebaseio.com",
  projectId: "pseudoslack",
  storageBucket: "pseudoslack.appspot.com",
  messagingSenderId: "89904171264"
};

firebase.initializeApp(config);

let db = firebase.firestore();
let auth = firebase.auth();

export default {
  db,
  auth
};
