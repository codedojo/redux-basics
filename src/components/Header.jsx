import React from 'react';

import Stats from './stats';
import Stopwatch from './stopwatch';

function Header(props) {
    return (
        <header>
            <Stats todos={props.todos} />
            <h1>Redux Todo</h1>
            <Stopwatch />
        </header>
    );
}

Header.propTypes = {
    todos: React.PropTypes.array.isRequired
};

export default Header;