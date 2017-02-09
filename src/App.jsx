import React from 'react';

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

        let todos = [...this.state.todos, todo];

        this.setState({ todos });
    }

    handleDelete(id) {
        const todos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({ todos });
    }

    handleToggle(id) {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({ todos });
    }

    handleEdit(id, title) {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }

            return todo;
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
    initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })).isRequired
};

export default App;