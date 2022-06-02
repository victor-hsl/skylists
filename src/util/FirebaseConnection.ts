import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';
import {getFirestore, collection, CollectionReference, DocumentData} from '@firebase/firestore';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);

export const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);

export const createCollection = <T = DocumentData> (collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>
}