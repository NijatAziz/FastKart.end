import { createStore, combineReducers } from 'redux';
import cartReducer from './cartconnect';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;