import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCsx6PL8ShdXBWRCBO29XKo3n2yW6czQkg",
  authDomain: "domlele-fc2aa.firebaseapp.com",
  projectId: "domlele-fc2aa",
  storageBucket: "domlele-fc2aa.appspot.com", // corrigido aqui
  messagingSenderId: "580663634168",
  appId: "1:580663634168:web:23a7326c185f1f8d7ab30d",
  measurementId: "G-BFTYX5WR0H"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
s