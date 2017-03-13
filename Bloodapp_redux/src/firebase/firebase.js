import * as firebase from 'firebase'


var config = {
    apiKey: "AIzaSyBlHluR2pyUruRT4Bba6rLpQiqEYr6pZaA",
    authDomain: "fareed-agha.firebaseapp.com",
    databaseURL: "https://fareed-agha.firebaseio.com",
    storageBucket: "fareed-agha.appspot.com",
    messagingSenderId: "824412179547"
  };
  firebase.initializeApp(config);  
export class FirebaseService{

static ref = firebase.database().ref();
static auth = firebase.auth();

static customAuth(user){
    return this.auth.createUserWithEmailAndPassword(user.email,user.password);

}
 static saveMultipath(multipath) {
        return this.ref.update(multipath);
    }

static customLogin(user){
    return this.auth.signInWithEmailAndPassword(user.email,user.password);
}
static addNewUser(user){

    return this.ref.child(user).set();
}

static getPushRef(path){
    return this.ref.child(path).push();
}

}