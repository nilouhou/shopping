import {
	signInWithGooglePopup,
	signInWithStoredEmail,
} from "../../utils/firbase/firebase";

import { useState, useContext } from "react";
import FormInput from "../../components/FormInput/FormInput";
import Button, { BUTTUON_STYLES } from "../../components/Button/Button";

const Login = () => {
	const intialVlue = {
		email: "",
		password: "",
	};
	const [values, setValues] = useState(intialVlue);

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const { email, password } = values;

	const resetFormFields = () => {
		setValues(intialVlue);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signInWithStoredEmail(email, password);

			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("incorrect password for email");
					break;
				case "auth/user-not-found":
					alert("no user associated with this email");
					break;
				default:
					console.log(error);
			}
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

			required: true,
		},
	];

	return (
		<div className="container">
			<div className="register-wrapper">
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
					<Button type="submit" buttonType={BUTTUON_STYLES.primary}>
						Login
					</Button>
					<Button
						type="button"
						onClick={signInWithGoogle}
						buttonType={BUTTUON_STYLES.secondary}
					>
						Sign in with Google
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
