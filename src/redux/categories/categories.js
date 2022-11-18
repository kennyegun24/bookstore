// ACTIONS
const CHECK_STATUS = 'bookstore/src/redux/category/CHECK_STATUS';

// REDUCERS
const categories = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
};

// ACTION CREATORS
const category = () => ({
  type: CHECK_STATUS,
});

export default categories;
export { category };
