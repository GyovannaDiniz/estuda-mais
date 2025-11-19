import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBesYKe-yrDbDKGDZj7UDY1giU0_ExF_dk",
  authDomain: "securitymobile-f355d.firebaseapp.com",
  projectId: "securitymobile-f355d",
  storageBucket: "securitymobile-f355d.firebasestorage.app",
  messagingSenderId: "495172631328",
  appId: "1:495172631328:web:e37cc40c7f898bed9af545",
  measurementId: "G-8P9YJN08X1"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta a instância do Auth, para que possamos autenticar os usuários do sistema
export const auth = getAuth(app);