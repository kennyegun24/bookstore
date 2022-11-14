import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './book/book';
import categories from './categories/categories';

const allReducers = combineReducers({
  books: bookReducer,
  categories,
});

const store = configureStore({ reducer: allReducers });

export default store;
