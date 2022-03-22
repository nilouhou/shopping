import { creatAuthUserWithEmailAndPassword } from "../../utils/firbase/firebase";

import { useState, useContext } from "react";
import FormInput from "../../components/FormInput/FormInput";
import "./Login.scss";
import Button from "../../components/Button/Button";
import { UserContext } from "../../contexts/user.context";

const SignUp = () => {
	const intialVlue = {
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};
	const [values, setValues] = useState(intialVlue);

	const { setCurrentUser } = useContext(UserContext);

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	console.log(values);
	const { displayName, email, password, confirmPassword } = values;

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			return;
		}

		try {
			const { user } = await creatAuthUserWithEmailAndPassword(email, password);
			setCurrentUser(user);
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

			required: true,
		},
		{
			id: 4,
			name: "confirmPassword",
			type: "password",
			placeholder: "Confirm Password",
			label: "Confirm Password",

			required: true,
		},
	];

	return (
		<div className="container">
			<div className="register-wrapper">
				<h1>Sin up page</h1>
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
						SignUp
					</Button>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
