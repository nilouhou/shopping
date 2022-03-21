import {
	signInWithGooglePopup,
	createUserDocrumentFromAuth,
	signInWithStoredEmail,
} from "../../utils/firbase/firebase";

import { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";

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

	const { email, password } = values;
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const logUser = async () => {
				const { user } = await signInWithStoredEmail(email, password);
				const userDocRef = await createUserDocrumentFromAuth(user);
			};
		} catch (error) {
			console.log(error.code);
		}
	};

	const inputs = [
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
			<Button type="submit" buttonType="primary">
				Login
			</Button>
			<Button onClick={logGoogleUser} buttonType="primary">
				Sign in with Google
			</Button>
		</div>
	);
};

export default Login;
