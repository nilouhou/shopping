//import firebase app
import { initializeApp } from "firebase/app";

//import firebase authentication methods
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithRedirect,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

//import firebase storedata
//doc = documentation : shoes is collection, nike max is document
//getDoc= getting data of document, for example get data of nike max price, size
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from "firebase/firestore";

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
const googleProvider = new GoogleAuthProvider(); // it is a class and we can have many providers in app that is why we are making instance of it

googleProvider.setCustomParameters({
	propmt: "select_account",
});

export const auth = getAuth(); // we only need one rule of authentication, so we don't need instance and new
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

//Create database instance
export const db = getFirestore();

//adding data to databse collection key: hats,shirts----- objectsToAdd: each collections data
export const addCollectionandDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
};

//collecting data from firestore
export const getDataFromFireStore = async () => {
	const collectionRef = collection(db, "categories");
	const q = query(collectionRef);

	const queryData = await getDocs(q); //getting all data in database

	//shaping all data to what we want to be look like
	const categoryMap = queryData.docs.reduce((acc, docData) => {
		// console.log(docData.data());
		//{title: 'Hats', items: Array(9)}
		//{title: 'Jackets', items: Array(5)}
		//{items: Array(6), title: 'Mens'}
		//by usinf reduce we combine all of the in one object with keys title and value item  title:items
		const { title, items } = docData.data();
		acc[title.toLowerCase()] = items;
		return acc;
	}, {});

	return categoryMap;
};

//how to use the database, create a method to use it
export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return;
	//doc is getting 3 argument, db, name of collection in database and unique id
	const userDocRef = doc(db, "users", userAuth.uid);

	const userData = await getDoc(userDocRef);

	if (!userData.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			//set the doc if the user does not exit
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log(error);
		}
	}
	return userDocRef;
};

//Function for using email and padssword
export const creatAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

//Sign in with Email and password

export const signInWithStoredEmail = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

//Sign out function
export const signOutFirebase = async () => await signOut(auth);

// refactor our code to only have one place to change user
export const onAuthStateChangedListener = (callback) => {
	onAuthStateChanged(auth, callback);
};
