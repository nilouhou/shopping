import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInWithStoredEmail,
} from "../../utils/firbase/firebase";

import { useState, useContext } from "react";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { UserContext } from "../../contexts/user.context";

const Login = () => {
	const intialVlue = {
		email: "",
		password: "",
	};
	const [values, setValues] = useState(intialVlue);

	//use context
	const { setCurrentUser } = useContext(UserContext);

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
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
			const { user } = await signInWithStoredEmail(email, password);
			setCurrentUser(user);
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
				<Button type="submit" buttonType="primary">
					Login
				</Button>
				<Button type="button" onClick={signInWithGoogle} buttonType="primary">
					Sign in with Google
				</Button>
			</form>
		</div>
	);
};

export default Login;
