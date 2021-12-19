export default (state = [], action) => {
  if (action.type === 'FETCH_POSTS') {
    return action.payload;
  }

  return state; // Must not return 'undefined' in any case
  // Option 2
  // switch (action.type) {
  //   case 'FETCH_POSTS':
  //     return action.payload;
  //   default:
  //     return state;
  // }
};