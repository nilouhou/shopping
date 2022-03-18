import {
	signInWithGooglePopup,
	createUserDocrumentFromAuth,
	creatAuthUserWithEmailAndPassword,
} from "../../utils/firbase/firebase";

import { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";

const Login = () => {
	const intialVlue = {
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};
	const [values, setValues] = useState(intialVlue);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocrumentFromAuth(user);
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(values);
		if (values.password !== values.confirmPassword) {
			return;
		}

		try {
			const response = await creatAuthUserWithEmailAndPassword(
				values.email,
				values.password
			);

			console.log(response);
		} catch (error) {
			console.log(error);
		}
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
			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
			required: true,
		},
		{
			id: 4,
			name: "confirmPassword",
			type: "password",
			placeholder: "Confirm Password",
			label: "Confirm Password",
			pattern: values.password,
			required: true,
		},
	];

	return (
		<div>
			<h1>Login page</h1>
			<form onSubmit={handleSubmit}>
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
