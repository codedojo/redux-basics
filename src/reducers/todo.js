import { GET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../actions';

function todoReducer(state = {}, action) {
    switch (action.type) {
        case TOGGLE_TODO:
            if (state.id !== action.data.id) {
                return state;
            }

            return action.data;

        case EDIT_TODO:
            if (state.id !== action.data.id) {
                return state;
            }

            return action.data;

        default:
            return state;
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_TODOS:
            return action.data;

        case ADD_TODO:
            return [...state, action.data];

        case DELETE_TODO:
            const index = state.findIndex(todo => todo.id === action.data.id);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case TOGGLE_TODO:
            return state.map(todo => todoReducer(todo, action));

        case EDIT_TODO:
            return state.map(todo => todoReducer(todo, action));

        default:
            return state;
    }
}

export function getFilteredTodos(state, filter) {
    switch (filter) {
        case 'ALL':
            return state;
        
        case 'COMPLETED':
            return state.filter(todo => todo.completed);

        case 'UNCOMPLETED':
            return state.filter(todo => !todo.completed);

        default:
            return state;
    }
}