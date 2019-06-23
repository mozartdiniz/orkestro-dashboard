import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import drivers from './drivers/reducers';
import orders from './orders/reducers';

const rootReducer = combineReducers({
  drivers,
  orders
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
