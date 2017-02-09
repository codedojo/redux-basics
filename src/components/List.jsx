import React from 'react';

import Todo from './Todo';

function List(props) {
    return (
        <section className="todo-list">
            {props.todos.map(todo =>
                <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onDelete={props.onDelete}
                    onToggle={props.onToggle}
                    onEdit={props.onEdit}
                />)
            }
        </section>
    );
}

List.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })).isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onToggle: React.PropTypes.func.isRequired,
    onEdit: React.PropTypes.func.isRequired
};

export default List;