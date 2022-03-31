import React from "react";
import { FormInputLabel, Input, Group } from "./FormInput.style";
const FormInput = ({ label, id, onChange, placeholder, ...inputProps }) => {
	return (
		<Group>
			<Input {...inputProps} onChange={onChange} />
			{label && (
				<FormInputLabel shrink={inputProps.value.length}>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};

export default FormInput;
