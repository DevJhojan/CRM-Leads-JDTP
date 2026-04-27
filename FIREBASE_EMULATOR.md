# Configuración de Firebase Emulator para desarrollo local

1. Instala las herramientas de Firebase CLI si no las tienes:
   npm install -g firebase-tools

2. Inicializa los emuladores en tu proyecto (si no lo has hecho):
   firebase init emulators

3. En tu archivo src/firebase/config.ts, conecta Firestore y Auth al emulador si estás en desarrollo:

import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

if (import.meta.env.DEV) {
connectFirestoreEmulator(db, "localhost", 8080);
connectAuthEmulator(auth, "http://localhost:9099");
}

4. Inicia los emuladores:
   firebase emulators:start

5. ¡Listo! Tu app usará los emuladores en desarrollo y Firebase real en producción.

---

Puedes seguir usando los datos ficticios de /data para desarrollo local, y migrar a Firestore cuando lo desees.
