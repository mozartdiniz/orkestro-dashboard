import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import drivers from './drivers/reducers';

const rootReducer = combineReducers({
  drivers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
