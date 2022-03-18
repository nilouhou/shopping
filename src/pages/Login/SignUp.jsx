import { creatAuthUserWithEmailAndPassword } from "../../utils/firbase/firebase";

import { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";

const SignUp = () => {
	const intialVlue = {
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};
	const [values, setValues] = useState(intialVlue);

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
			const response = await creatAuthUserWithEmailAndPassword(email, password);

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
		<div>
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

				<button type="submit">SignUp</button>
			</form>
		</div>
	);
};

export default SignUp;
