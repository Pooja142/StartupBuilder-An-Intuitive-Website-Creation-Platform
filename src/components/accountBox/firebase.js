import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-c4xCG7QrqUvGvSSjRjeG-AIrTSkLLL8",

  authDomain: "startup-builder-835b1.firebaseapp.com",

  databaseURL: "https://startup-builder-835b1-default-rtdb.firebaseio.com",

  projectId: "startup-builder-835b1",

  storageBucket: "startup-builder-835b1.appspot.com",

  messagingSenderId: "159894068127",

  appId: "1:159894068127:web:d966ac8d8e1e0b73a23baa",

  measurementId: "G-T9YC17P26V",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
