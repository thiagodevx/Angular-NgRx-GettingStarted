export const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'showProductCode':
      return { ...state, showProductCode: action.payload };
    default:
      return state;
  }
};
