import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnNU0NxqLAlOLxrhsUA-1yfmYfzUE6Xko",
  authDomain: "clone-1bba5.firebaseapp.com",
  databaseURL: "https://clone-1bba5.firebaseio.com",
  projectId: "clone-1bba5",
  storageBucket: "clone-1bba5.appspot.com",
  messagingSenderId: "838909647130",
  appId: "1:838909647130:web:51ce355e661351b537b4a3",
  measurementId: "G-QSRV4WKMY9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;