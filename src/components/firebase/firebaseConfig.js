import { initializeApp } from "firebase/app";
//Para poder utilizar la base de datos que tenemos creada en nuestro firestore
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBafTwR-98nzkiwaGjWvWUxtaBHcxd4Lm0",
  authDomain: "feelinpasteleria.firebaseapp.com",
  projectId: "feelinpasteleria",
  storageBucket: "feelinpasteleria.appspot.com",
  messagingSenderId: "588262740217",
  appId: "1:588262740217:web:9f0f511f69009f105e9228"
};


const app = initializeApp(firebaseConfig);
//db vien de Data Base
const db = getFirestore(app);

export default db;