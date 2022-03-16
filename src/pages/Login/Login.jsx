import {
	signInWithGooglePopup,
	createUserDocrumentFromAuth,
} from "../../utils/firbase/firebase";

const Login = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocrumentFromAuth(user);
	};
	return (
		<div>
			<h1>Login page</h1>
			<button onClick={logGoogleUser}>Sign in with Google</button>
		</div>
	);
};

export default Login;
