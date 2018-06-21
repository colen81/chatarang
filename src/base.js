import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAZZkF-N_eqytxJbIB-ttl5SVzbeYLufmE",
  authDomain: "chatarang-82ecc.firebaseapp.com",
  databaseURL: "https://chatarang-82ecc.firebaseio.com",
  projectId: "chatarang-82ecc",
  storageBucket: "chatarang-82ecc.appspot.com",
  messagingSenderId: "399301182518"
};

const app = firebase.initializeApp(config)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const auth = firebase.auth()

const db = app.database()

export default Rebase.createClass(db)
