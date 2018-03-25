import React from 'react'

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
    let wrapperClass = ''
    if (error && error.length > 0) {
        wrapperClass += " has-error"
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className=""
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}/>
                {error && <div>{error}</div>}
            </div>
        </div>
    )
}

export default TextInput
