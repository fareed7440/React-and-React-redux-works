import firebase from 'firebase'

 var config = {
    apiKey: "AIzaSyAHL6P8cJebRk_Q0ltmv1MULAhEIwxEvxc",
    authDomain: "todoapp-c580a.firebaseapp.com",
    databaseURL: "https://todoapp-c580a.firebaseio.com",
    storageBucket: "todoapp-c580a.appspot.com",
    messagingSenderId: "508565061761"
  };
  firebase.initializeApp(config);
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
