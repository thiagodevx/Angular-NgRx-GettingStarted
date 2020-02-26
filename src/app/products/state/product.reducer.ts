export const ProductReducer = (state, action) => {
  console.log('state:', JSON.stringify(state));
  console.log('action.type:', action.type);
  console.log('action.payload:', action.payload);
  switch (action.type) {
    case 'showProductCode':
      return { ...state, showProductCode: action.payload };
    default:
      return state;
  }
};
