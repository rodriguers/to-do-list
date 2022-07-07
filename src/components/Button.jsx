import React from 'react';
import './Button.css';
const Button = ({ children, addTask }) => {
    return <button className='add-button' onClick={ addTask }>{children}</button>
};
export default Button;
