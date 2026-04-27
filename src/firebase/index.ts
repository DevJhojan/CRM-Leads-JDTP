import { firebaseApp } from "./config";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
