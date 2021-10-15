import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAs4PgOqrTQVbeufTkHjfKSV1JKLAM53Nk",
    authDomain: "listadetarefas-guilherme.firebaseapp.com",
    projectId: "listadetarefas-guilherme",
    storageBucket: "listadetarefas-guilherme.appspot.com",
    messagingSenderId: "814343704630",
    appId: "1:814343704630:web:cec943b2006ace1e628897"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}