import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCiHamLBI_BmEMUZBxD_8ajtiyyxMgkPeA",
    authDomain: "serigrafiagomez-1f45a.firebaseapp.com",
    projectId: "serigrafiagomez-1f45a",
    storageBucket: "serigrafiagomez-1f45a.firebasestorage.app",
    messagingSenderId: "238628361821",
    appId: "1:238628361821:web:e6c77210b2364a27959fb4",
    measurementId: "G-FCEHJTNPJF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
export default db;