import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkwn4mnHywtmJsGwGkXPZ-IODg3gKkLnI",
  authDomain: "m-city-6114d.firebaseapp.com",
  databaseURL: "https://m-city-6114d.firebaseio.com",
  projectId: "m-city-6114d",
  storageBucket: "m-city-6114d.appspot.com",
  messagingSenderId: "816248727377",
  appId: "1:816248727377:web:2fb3fbe7e5a36338365570"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");

export { firebase, firebaseMatches, firebasePromotions };
