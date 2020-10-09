import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtkd_sIjyOqHtP28p6Zwj-FPOQS5A5x_E",
    authDomain: "fir-91577.firebaseapp.com",
    databaseURL: "https://fir-91577.firebaseio.com",
    projectId: "fir-91577",
    storageBucket: "fir-91577.appspot.com",
    messagingSenderId: "561218714016",
    appId: "1:561218714016:web:6c019c634c4479da840cc5"
  });

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};