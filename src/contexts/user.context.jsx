// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
import { createContext, useState } from "react";

//actual value you want to access
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

//actual component provider
//Provider component make the context store available to any nested components that need to access
export const UserProdvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
