import React from "react";
import PropTypes from 'prop-types';
import './button.css';

const Button = ({primary, label, size, handleClick, backgroundColor, ...props }) => {
    const mode = primary ? 'btn--primary' : 'btn--secondary';
    return (
        <button className={['btn', `btn--${size}`, mode].join(' ')} type='button' onClick={handleClick} {...props}
        
            style={backgroundColor && { backgroundColor }}
        >{label}</button>
    )
}
export default Button;

Button.propTypes = {
    primary:PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    backgroundColor:PropTypes.string,
    handleClick:PropTypes.func
}

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'md',
  handleClick: undefined,
};