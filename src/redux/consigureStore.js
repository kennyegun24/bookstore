import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './book/book';
import categories from './categories/categories';

const allReducers = combineReducers({
  books: bookReducer,
  categories,
});

const store = configureStore({ reducer: allReducers }, applyMiddleware(thunk));

export default store;
