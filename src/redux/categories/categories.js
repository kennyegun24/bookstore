// ACTIONS
const category = () => ({
  type: 'CHECK_STATUS',
});
category();

// REDUCERS
const categories = (state = [], action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return 'UNDONE';
    default:
      return state;
  }
};

export default categories;
