import React from 'react';
import PropTypes from 'prop-types';

import FilterLink from './FilterLink';

function Filter(props) {
    return (
        <div className="todo-filter">
            <FilterLink
                icon="list"
                active={props.activeFilter === 'ALL'}
                onClick={() => props.onSetFilter('ALL')}>
            </FilterLink>

            <FilterLink
                icon="check_box"
                active={props.activeFilter === 'COMPLETED'}
                onClick={() => props.onSetFilter('COMPLETED')}>
            </FilterLink>

            <FilterLink
                icon="check_box_outline_blank"
                active={props.activeFilter === 'UNCOMPLETED'}
                onClick={() => props.onSetFilter('UNCOMPLETED')}>
            </FilterLink>
        </div>
    );
}

Filter.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    onSetFilter: PropTypes.func.isRequired
};

export default Filter;