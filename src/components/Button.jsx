import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, variant = 'primary', type = 'button', disabled = false,  className, ...props }) => {
    const baseClasses =
        'py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden';


    const variantClasses = {
        primary: 'border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700',
        secondary: 'border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:bg-gray-50',
    };

    return (
        <button
            type={type}
            disabled={disabled}
            className={classNames(baseClasses, variantClasses[variant],className)}
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary']),
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
};

export default Button;
