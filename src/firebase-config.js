import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBG_XQB28pSl7t8L794xMh3DlB2CPw6i-k',
  authDomain: 'nomnom-13317.firebaseapp.com',
  projectId: 'nomnom-13317',
  storageBucket: 'nomnom-13317.appspot.com',
  messagingSenderId: '768100080259',
  appId: '1:768100080259:web:3c39101b4ac8dd7bfc99b6',
  measurementId: 'G-TT101EQ9R8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
