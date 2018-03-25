import React from 'react';
import './common.css';

const TextArea = ({name, label, rows, columns, onChange, placeholder, value, error}) => {
	let wrapperClass = '';
	if (error && error.length > 0) {
		wrapperClass += " has-error";
	}

	return (
		<div className={wrapperClass}>
			<div className="uk-margin">
        <textarea
          name={name}
          rows={rows}
          cols={columns}
          className="uk-textarea"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
				{error && <div>{error}</div>}
			</div>
		</div>
	)
};

export default TextArea;
