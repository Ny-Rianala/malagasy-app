import {createStore} from 'redux';
import categories from '../src/data/categories.json';
import reducers from './reducers';

const store = createStore(reducers, categories);
export default store;
