import firebase from 'firebase/app'
import 'firebase/auth'
import "firebase/firestore";


const app = firebase.initializeApp({
    
    apiKey: "AIzaSyBEaC28gmHdWDm4gY3oMfD3teFjAVxKgb8",
    authDomain: "edu-online-732bd.firebaseapp.com",
    projectId: "edu-online-732bd",
    storageBucket: "edu-online-732bd.appspot.com",
    messagingSenderId: "749842526756",
    appId: "1:749842526756:web:9146a317ec3372dd2a5eb1"

})


export const auth = app.auth()
export default app
export const firestore = firebase.firestore();