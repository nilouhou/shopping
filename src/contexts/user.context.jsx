// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firbase/firebase";

//actual value you want to access
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

//actual component provider
//Provider component make the context store available to any nested components that need to access
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => console.log(user));
		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
