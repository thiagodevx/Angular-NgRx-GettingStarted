export const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'displayProductCode':
      return { ...state, displayProductCode: action.payload };
    default:
      return state;
  }
};
