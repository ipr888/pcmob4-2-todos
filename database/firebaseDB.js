import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDod3Y0U8Y7D13WbhCxpx0CherVfTVx9ys",
  authDomain: "pcmob4-96963.firebaseapp.com",
  projectId: "pcmob4-96963",
  storageBucket: "pcmob4-96963.appspot.com",
  messagingSenderId: "1030215658187",
  appId: "1:1030215658187:web:5fd378ca20f06d0cfe094e",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
