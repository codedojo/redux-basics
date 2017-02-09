import React from 'react';

function FilterLink(props) {
    return (
        <a className={props.active ? 'is-active' : ''} onClick={props.onClick}>
            <i className="material-icons">{props.icon}</i>
        </a>
    );
}

FilterLink.propTypes = {
    icon: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default FilterLink;