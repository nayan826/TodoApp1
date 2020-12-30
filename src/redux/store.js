import { createStore } from 'redux';
import postReducer from './reducers';

const initialState = {Allposts: [], currentPost: {}}

const store = createStore(postReducer,initialState);

export default store;