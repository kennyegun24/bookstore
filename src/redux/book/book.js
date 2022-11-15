import { createAsyncThunk } from '@reduxjs/toolkit';

// ACTIONS
const REMOVE__BOOK = 'bookstore/src/redux/book/REMOVE__BOOK';
const ADD__BOOK = 'bookstore/src/redux/book/ADD__BOOK';
const GET_BOOK = 'bookstore/src/redux/GET_BOOK';

// DEFAULT BOOKS

const displayBooks = [];
// REDUCERS
const bookReducer = (state = displayBooks, action) => {
  switch (action.type) {
    case GET_BOOK:
      return action.unique;
    case REMOVE__BOOK:
      return state.filter((book) => book.item_id !== action.unique.id);
    case ADD__BOOK:
      return [...state, action.item];
    default:
      return state;
  }
};

// ACTIONS CREATORS

export const getBooks = createAsyncThunk(GET_BOOK, async (post, { dispatch }) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/g9zeM8PZcRnuqLGRDIob/books');
  const data = await response.json();
  const books = Object.keys(data).map((key) => ({
    ...data[key][0],
    item_id: key,
  }));
  dispatch({
    type: GET_BOOK,
    unique: books,
  });
});

const addBook = createAsyncThunk(ADD__BOOK, async (book, { dispatch }) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/g9zeM8PZcRnuqLGRDIob/books', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(book),
  });
  dispatch({
    type: ADD__BOOK,
    item: book,
  });
});

const removeBook = createAsyncThunk(REMOVE__BOOK, async (id, { dispatch }) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/g9zeM8PZcRnuqLGRDIob/books/${id}`, {
    method: 'DELETE',
  });
  dispatch({
    type: REMOVE__BOOK,
    unique: { id },
  });
});

export default bookReducer;
export { removeBook, addBook };
