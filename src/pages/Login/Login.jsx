import { signInWithGooglePopup } from "../../utils/firbase/firebase";
const Login = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		console.log(response);
	};
	return (
		<div>
			<h1>Login page</h1>
			<button onClick={logGoogleUser}>Sign in with Google</button>
		</div>
	);
};

export default Login;
