import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBiU2Nu960W_XC3Z1CVPkIJA95WN1T3oXI",
    authDomain: "linkedin-c9263.firebaseapp.com",
    projectId: "linkedin-c9263",
    storageBucket: "linkedin-c9263.appspot.com",
    messagingSenderId: "545142108364",
    appId: "1:545142108364:web:b4b9ab0f5ea8f0af945269"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage};
export default db;