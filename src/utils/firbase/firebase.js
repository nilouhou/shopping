import { initializeApp } from "firebase/app";
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithRedirect,
} from "firebase/auth";

//web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); // it is a class and we can have many providers in app that is why we are making instance of it

provider.setCustomParameters({
	propmt: "select_account",
});

export const auth = getAuth(); // we only need one rule of authentication, so we don't need instance and new
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
