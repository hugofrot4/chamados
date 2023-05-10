import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBSdoWc3XnDRJGrvCvjxfb_jn_gfl-QXKE',
  authDomain: 'tickets-4e8ad.firebaseapp.com',
  projectId: 'tickets-4e8ad',
  storageBucket: 'tickets-4e8ad.appspot.com',
  messagingSenderId: '243771116857',
  appId: '1:243771116857:web:1690f4f159f2904f4cece8',
  measurementId: 'G-0WN5NNWJQX',
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
