// ACTIONS
const REMOVE__BOOK = 'bookstore/src/redux/book/REMOVE__BOOK';
const ADD__BOOK = 'bookstore/src/redux/book/ADD__BOOK';

// REDUCERS
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE__BOOK':
      return state.filter((book) => book.id !== action.type.id);
    case 'ADD_BOOK':
      return [...state, action.item.book];
    default:
      return state;
  }
};

// ACTIONS CREATORS
const addBook = (book) => ({
  type: ADD__BOOK,
  item: book,
});
addBook();

const removeBook = (id) => ({
  type: REMOVE__BOOK,
  id,
});
removeBook();

export default bookReducer;
