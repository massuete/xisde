import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAU3OPH2x5STKxAwdOD9_0n8t3X94rfdeA",
  authDomain: "xisde-32487.firebaseapp.com",
  projectId: "xisde-32487",
  storageBucket: "xisde-32487.firebasestorage.app",
  messagingSenderId: "809096551046",
  appId: "1:809096551046:web:655946959b3c724fbc0f07",
  measurementId: "G-XWX5Y5CTQX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);