// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAfhaOp2PY3Dmk_B5KuZPDyhr3JnlQJbrY',
  authDomain: 'serent-web.firebaseapp.com',
  projectId: 'serent-web',
  storageBucket: 'serent-web.appspot.com',
  messagingSenderId: '826086356563',
  appId: '1:826086356563:web:ca1566c95ea09b98eaf8a6',
  measurementId: 'G-4H5RW0L4HD'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
