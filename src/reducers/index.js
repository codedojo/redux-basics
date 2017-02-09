import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../actions';

function todoReducer(state = {}, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                title: action.title,
                completed: false
            };

        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                completed: !state.completed
            });

        case EDIT_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                title: action.title
            });
    }
}

function reducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, todoReducer(undefined, action)];

        case DELETE_TODO:
            const index = state.findIndex(todo => todo.id === action.id);

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

export default reducer;