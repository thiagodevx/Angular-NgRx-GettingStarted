import { ProductState } from './product.state';

export const ProductReducer = (state: ProductState, action): ProductState => {
  switch (action.type) {
    case 'displayProductCode':
      return { ...state, showProductCode: action.payload };
    default:
      return state;
  }
};
