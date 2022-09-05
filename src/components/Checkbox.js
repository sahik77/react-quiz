import React from 'react';

const Checkbox = ({ className, text, ...rest }) => {
    return (
        <div>
            <label className={className}>
                <input {...rest} />
                <span> {text}</span>
            </label>
        </div >
    );
};

export default Checkbox;