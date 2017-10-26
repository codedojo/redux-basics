import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import localStorage, { loadState } from '../middleware/local-storage';

import reducer from '../reducers';

const initialState = loadState('todos');
const store = createStore(reducer, initialState, applyMiddleware(thunk, promise, localStorage('todos'), logger));

export default store;