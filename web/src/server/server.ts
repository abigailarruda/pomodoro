import firebase from "firebase";

var firebaseConfig = {
  /* Utilizar os dados disponíveis no console do projeto no Firebase */
};

const db = firebase.initializeApp(firebaseConfig).database().ref();

export default db;
