import { v4 as uuidv4 } from 'uuid';

// ACTIONS
const REMOVE__BOOK = 'bookstore/src/redux/book/REMOVE__BOOK';
const ADD__BOOK = 'bookstore/src/redux/book/ADD__BOOK';

// DEFAULT BOOKS

const displayBooks = [
  {
    id: uuidv4(),
    title: 'Avengers',
    author: 'Kenny elias',
  }, {
    id: uuidv4(),
    title: 'legend of the seeker',
    author: 'Kenny elias',
  }, {
    id: uuidv4(),
    title: 'the line',
    author: 'Kenny elias',
  }, {
    id: uuidv4(),
    title: 'behind enemies line',
    author: 'Kenny elias',
  }, {
    id: uuidv4(),
    title: 'Avengers',
    author: 'Kenny elias',
  }, {
    id: uuidv4(),
    title: 'Avengers',
    author: 'Kenny elias',
  },
];
// REDUCERS
const bookReducer = (state = displayBooks, action) => {
  switch (action.type) {
    case REMOVE__BOOK:
      return state.filter((book) => book.id !== action.unique.id);
    case ADD__BOOK:
      return [...state, action.item];
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
  unique: { id },
});

export default bookReducer;
export { removeBook, addBook };
