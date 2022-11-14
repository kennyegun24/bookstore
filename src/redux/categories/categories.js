// ACTIONS
const CHECK_STATUS = 'bookstore/src/redux/category/CHECK_STATUS';

// REDUCERS
const categories = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'UNDONE';
    default:
      return state;
  }
};

// ACTION CREATORS
const category = () => ({
  type: CHECK_STATUS,
});
category();

export default categories;
