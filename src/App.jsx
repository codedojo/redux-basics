import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };

        this._nextId = this.state.todos.length;
        
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    nextId() {
        return this._nextId += 1;
    }

    handleAdd(title) {
        const todo = {
            id: this.nextId(),
            title,
            completed: false
        };

        const todos = [...this.state.todos, todo];

        this.setState({ todos });
    }

    handleDelete(id) {
        const index = this.state.todos.findIndex(todo => todo.id === id);
        const todos = [
            ...this.state.todos.slice(0, index),
            ...this.state.todos.slice(index + 1)
        ];
        
        this.setState({ todos });
    }

    handleToggle(id) {
        const todos = this.state.todos.map(todo => {
            if (todo.id !== id) {
                return todo;
            }

            return Object.assign({}, todo, {
                completed: !todo.completed
            });
        });

        this.setState({ todos });
    }

    handleEdit(id, title) {
        const todos = this.state.todos.map(todo => {
            if (todo.id !== id) {
                return todo;
            }

            return Object.assign({}, todo, {
                title: title
            });
        });

        this.setState({ todos });
    }

    render() {
        const todos = this.state.todos;

        return (
            <main>
                <Header todos={todos} />

                <List
                    todos={todos}
                    onDelete={this.handleDelete}
                    onToggle={this.handleToggle}
                    onEdit={this.handleEdit}
                />

                <Form onAdd={this.handleAdd} />
            </main>
        );
    }
}

App.propTypes = {
    initialData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};

export default App;
