import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAgtcTqLxnoNUXcZRq310nXczpQmS2vKMU",
  authDomain: "tinder-clone-251fb.firebaseapp.com",
  databaseURL: "https://tinder-clone-251fb.firebaseio.com",
  projectId: "tinder-clone-251fb",
  storageBucket: "tinder-clone-251fb.appspot.com",
  messagingSenderId: "573588828637",
  appId: "1:573588828637:web:1b8ccfe6a18a160d6a0634",
  measurementId: "G-2XQE5YL7L6"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;