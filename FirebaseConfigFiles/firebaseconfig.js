// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  onSnapshot,
  doc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  getDocs,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoaPE7EAniEjGjAU_tT-PTFYDpibEUr_A",
  authDomain: "saylani-test-f32ff.firebaseapp.com",
  projectId: "saylani-test-f32ff",
  storageBucket: "saylani-test-f32ff.appspot.com",
  messagingSenderId: "187641089125",
  appId: "1:187641089125:web:59ed2edd00bc7c06d7ca8c",
  measurementId: "G-SWFTXNWRE1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

const db = getFirestore(app);

export {
  signOut,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  provider,
  GoogleAuthProvider,
  collection,
  addDoc,
  db,
  setDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  limit,
  uploadBytesResumable,
  getDownloadURL,
  storage,
  uploadBytes,
  ref,
  getDocs,
  updateProfile,
  getDoc,
};
