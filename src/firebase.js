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
var Googleprovider = new firebase.auth.GoogleAuthProvider();
var Facebookprovider = new firebase.auth.FacebookAuthProvider();
var Twitterprovider = new firebase.auth.TwitterAuthProvider();

export default {
  db,
  auth,
  Googleprovider,
  Facebookprovider,
  Twitterprovider
};
