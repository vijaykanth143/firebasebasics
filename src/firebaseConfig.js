import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDpU86vvPzUdXgZiZuETS6rzgfAG-lFRh4",
  authDomain: "fir-frontend-6f818.firebaseapp.com",
  projectId: "fir-frontend-6f818",
  storageBucket: "fir-frontend-6f818.appspot.com",
  messagingSenderId: "483505244227",
  appId: "1:483505244227:web:f02494cc42635c7ce16cf6",
  measurementId: "G-6JY780H4G3",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
