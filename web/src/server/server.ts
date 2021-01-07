import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCqrkM8uDo4t4FQ-F7-hBAyNfY4Mvpnvzg",
  authDomain: "pomodoro-fe376.firebaseapp.com",
  databaseURL: "https://pomodoro-fe376-default-rtdb.firebaseio.com",
  projectId: "pomodoro-fe376",
  storageBucket: "pomodoro-fe376.appspot.com",
  messagingSenderId: "652743126717",
  appId: "1:652743126717:web:95fa649f207fcdb32611d4",
};

const db = firebase.initializeApp(firebaseConfig).database().ref();

export default db;
