import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8MYO4556iIBre_tciIh3mQ_WCxU-HDiI",
  authDomain: "crud-app-giz.firebaseapp.com",
  projectId: "crud-app-giz",
  storageBucket: "crud-app-giz.appspot.com",
  messagingSenderId: "569889868249",
  appId: "1:569889868249:web:25e3723b24c89d3f0ab1c8",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
