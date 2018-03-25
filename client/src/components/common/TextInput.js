import React from 'react';
import './common.css';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
	let wrapperClass = '';
	if (error && error.length > 0) {
		wrapperClass += " has-error";
	}

	return (
		<div className={wrapperClass}>
			<div className="uk-margin">
				<input
					type="text"
					name={name}
					className="uk-input"
					placeholder={placeholder}
					value={value}
					onChange={onChange}/>
				{error && <div>{error}</div>}
			</div>
		</div>
	)
};

export default TextInput;
