import firebase from 'firebase/app';
import 'firebase/firestore'; // Import any additional Firebase services you need
import firebase from 'firebase/app';
import 'firebase/firestore'; // Import any additional Firebase services you need
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCawv3iqm3lDgqahst69Bgv6npgdaT9tZ4",
    authDomain: "uber-auth-178a4.firebaseapp.com",
    projectId: "uber-auth-178a4",
    storageBucket: "uber-auth-178a4.appspot.com",
    messagingSenderId: "533212971584",
    appId: "1:533212971584:web:a12d425e81300d128a15a5"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
