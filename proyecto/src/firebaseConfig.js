import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAG9OpHjmcdACUre5PXKFUOFABu3kA9baI",
  authDomain: "app-dash-aa6d2.firebaseapp.com",
  projectId: "app-dash-aa6d2",
  storageBucket: "app-dash-aa6d2.firebasestorage.app",
  messagingSenderId: "964769373255",
  appId: "1:964769373255:web:247e0fe56d9b5254b76562"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };