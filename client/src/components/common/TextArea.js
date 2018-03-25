import React from 'react';

const TextArea = ({name, label, rows, columns, onChange, placeholder, value, error}) => {
	let wrapperClass = '';
	if (error && error.length > 0) {
		wrapperClass += " has-error";
	}

	return (
		<div className={wrapperClass}>
			<label htmlFor={name}>{label}</label>
			<div className="field">
        <textarea
          name={name}
          rows={rows}
          cols={columns}
          className=""
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
				{error && <div>{error}</div>}
			</div>
		</div>
	)
};

export default TextArea;
