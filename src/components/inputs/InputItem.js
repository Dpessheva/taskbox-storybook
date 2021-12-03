import React from 'react';
import PropTypes from 'prop-types';
import './input.css';


const InputItem = ({type, label, size, placeholder, disabled, handleChange, ...props }) => {
    return (
        <div className='input-container'>
         <label className='input-label'>{label}</label>
         <input className={`input-field input-field--${size}`} disabled={disabled} type={type} {...props} placeholder={placeholder} onChange={handleChange}
        />
        </div>
        
    )
}
export default InputItem;

InputItem.propTypes = {
    type:PropTypes.oneOf(['text', 'number','email', 'password', 'select', 'radio', 'checkbox']),
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    disabled:PropTypes.bool,
    placeholder: PropTypes.string,
    handleChange:PropTypes.func
}

InputItem.defaultProps = {
    type:'text',
    label: 'Label',
    disabled:false,
    size: 'sm',
    placeholder: 'placeholder',
    handleChange:undefined
};
