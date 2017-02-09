import React from 'react';

import Checkbox from './Checkbox';
import Button from './Button';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.editing) {
            this.refs.title.focus();
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const title = this.refs.title.value;
        
        this.props.onEdit(this.props.id, title);
        this.setState({ editing: false });
    }

    handleDelete() {
        this.props.onDelete(this.props.id);
    }

    handleToggle() {
        this.props.onToggle(this.props.id);
    }

    handleEdit() {
        this.setState({ editing: true });
    }

    renderDisplay() {
        const className = `todo${this.props.completed ? ' completed' : ''}`;

        return (
            <div className={className}>
                <Checkbox checked={this.props.completed} onChange={this.handleToggle} />

                <span className="todo-title">{this.props.title}</span>

                <Button className="edit icon" icon="edit" onClick={this.handleEdit} />
                <Button className="delete icon" icon="delete" onClick={this.handleDelete} />
            </div>
        );
    }

    renderForm() {
        return (
            <form className="todo-edit-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="title" defaultValue={this.props.title} />
                <Button className="save icon" icon="save" type="submit" />
            </form>
        );
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

Todo.propTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onToggle: React.PropTypes.func.isRequired,
    onEdit: React.PropTypes.func.isRequired
};

export default Todo;