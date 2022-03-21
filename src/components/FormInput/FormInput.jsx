import React from "react";
import "./FormInput.scss";
const FormInput = ({ label, id, onChange, placeholder, ...inputProps }) => {
	return (
		<div className="group">
			<input className="form-input" {...inputProps} onChange={onChange} />
			{label && (
				<label
					className={`${inputProps.value ? "shrink" : ""} form-input-label`}
				>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
