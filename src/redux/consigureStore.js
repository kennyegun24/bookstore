import { combineReducers } from '@reduxjs/toolkit';
import bookReducer from './book/book';
import categories from './categories/categories';

const allReducers = combineReducers({
  books: bookReducer,
  categories,
});

export default allReducers;
