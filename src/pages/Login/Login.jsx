import {
	signInWithGooglePopup,
	createUserDocrumentFromAuth,
} from "../../utils/firbase/firebase";

import { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import { useInRouterContext } from "react-router-dom";

const Login = () => {
	const intialVlue = {
		displayName: "",
		email: "",
		password: "",
		confirmedPassword: "",
	};
	const [values, setValues] = useState(intialVlue);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocrumentFromAuth(user);
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const inputs = [
		{
			id: 1,
			type: "text",
			name: "displayName",
			label: "Name",
			placeholder: "Name",
			required: true,
		},
		{
			id: 2,
			type: "email",
			name: "email",
			label: "Email",
			placeholder: "Email",
			required: true,
		},
		{
			id: 3,
			type: "password",
			name: "password",
			label: "Password",
			placeholder: "Password",
			required: true,
		},
		{
			id: 4,
			type: "password",
			name: "password",
			label: "Confirmed Password",
			placeholder: "Confirmed Password",
			required: true,
		},
	];
	console.log(values);
	return (
		<div>
			<h1>Login page</h1>
			<form>
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={handleChange}
					/>
				))}
			</form>
			<button type="submit">Login</button>
			<button onClick={logGoogleUser}>Sign in with Google</button>
		</div>
	);
};

export default Login;
