import React from 'react';
import './common.css';

const CheckBox = ({name, label, onChange, value}) => {
	return (
		<div className="uk-margin">
			<label>
				<input
					type="checkbox"
					name={name}
					className="uk-checkbox"
					checked={value}
					onChange={onChange}/> {label}
			</label>
		</div>
	)
};

export default CheckBox;
