import { combineReducers } from 'redux';

import todos, * as fromTodos from './todo';
import filter from './filter';
import fetching from './fetching';

const reducer = combineReducers({
    todos,
    filter,
    fetching
});

export default reducer;

export function getFilteredTodos(state) {
    return fromTodos.getFilteredTodos(state.todos, state.filter);
}