import { createStore } from 'redux';
import productReducer from './Reducers/productReducer';

const store = createStore(productReducer);

export default store;
