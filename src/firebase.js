// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAPAq_CBTE81S9CeuforO9F2Ud9wkpvNM",
  authDomain: "disney-plus-clone-f3cf5.firebaseapp.com",
  projectId: "disney-plus-clone-f3cf5",
  storageBucket: "disney-plus-clone-f3cf5.appspot.com",
  messagingSenderId: "180882427756",
  appId: "1:180882427756:web:54abc0f1a9209f0772ad49",
  measurementId: "G-4WFNH15BDR",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const photo = result.user.photoURL;

//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("photo", photo);

//       console.log(localStorage.getItem("name"));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

