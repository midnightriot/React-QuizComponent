import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

interface TextInput_props {
    name: string,
    label: string,
    onChange: React.FormEventHandler<HTMLInputElement>,
    placeholder: string,
    value?: string,
    error?: string
}

function TextInput({name, label, onChange, placeholder, value, error}: TextInput_props): ReactElement {
    let wrapperClass = 'form-group';
    if (error != null && error.length > 0) {
        wrapperClass += ' has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type="text"
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}/>
                {error && (<div className="alert alert-danger">{error}</div>)}
            </div>
        </div>
    );
}

// Does this add any value if using TypeScript
TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;