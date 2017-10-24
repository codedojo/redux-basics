import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick} {...props}>
            {props.icon ? 
                <i className="material-icons">{props.icon}</i>
                :
                props.children
            }
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

export default Button;