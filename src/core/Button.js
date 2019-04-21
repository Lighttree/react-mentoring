import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

function Button({ className, type, children }) {
    return (
        // eslint-disable-next-line react/button-has-type
        <button type={type} className={`nr-button ${className}`}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    className: '',
    type: 'button'
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.string.isRequired
};

export default Button;
