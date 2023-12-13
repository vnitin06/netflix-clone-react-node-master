import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNSuimvBpLL5EIpOa9WHOXnZiQDDMgYI0",
  authDomain: "react-netflix-clone-34c31.firebaseapp.com",
  projectId: "react-netflix-clone-34c31",
  storageBucket: "react-netflix-clone-34c31.appspot.com",
  messagingSenderId: "58411848891",
  appId: "1:58411848891:web:622a970f50889ee089859e",
  measurementId: "G-M15YTNFV5M",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
