import {
	signInWithGooglePopup,
	createUserDocrumentFromAuth,
} from "../../utils/firbase/firebase";

import { useState } from "react";

const Login = () => {
	const intialVlue = {
		email: "",
		password: "",
	};
	const [values, setValues] = useState(intialVlue);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocrumentFromAuth(user);
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	console.log(values);
	return (
		<div>
			<h1>Login page</h1>
			<form>
				<label>Email</label>
				<input
					type="email"
					name="email"
					onChange={handleChange}
					value={values.email}
				/>
				<label>Passwprd</label>
				<input
					type="password"
					name="password"
					onChange={handleChange}
					value={values.password}
				/>
			</form>
			<button type="submit">Login</button>
			<button onClick={logGoogleUser}>Sign in with Google</button>
		</div>
	);
};

export default Login;
