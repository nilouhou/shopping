import React from "react";

const FormInput = ({ label, id, onChange, ...inputProps }) => {
	return (
		<>
			<label>{label}</label>
			<input {...inputProps} onChange={onChange} />
		</>
	);
};

export default FormInput;
