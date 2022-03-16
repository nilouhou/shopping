//import firebase app
import { initializeApp } from "firebase/app";

//import firebase authentication methods
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithRedirect,
} from "firebase/auth";

//import firebase storedata
//doc = documentation : shoes is collection, nike max is document
//getDoc= getting data of document, for example get data of nike max price, size
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

// creating Authentication provider
const provider = new GoogleAuthProvider(); // it is a class and we can have many providers in app that is why we are making instance of it

provider.setCustomParameters({
	propmt: "select_account",
});

export const auth = getAuth(); // we only need one rule of authentication, so we don't need instance and new
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//Create database instance
export const db = getFirestore();

//how to use the database, create a method to use it
export const createUserDocrumentFromAuth = async (userAuth) => {
	//doc is getting 3 argument, db, name of collection in database and unique id
	const userDocRef = doc(db, "user", userAuth.uid);

	const userData = await getDoc(userDocRef);
};
