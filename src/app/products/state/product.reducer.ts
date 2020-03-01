import { ProductState } from './product.state';

const initialState: ProductState = {
  showProductCode: false,
  products: [],
  currentProductId: null
};

export const ProductReducer = (state: ProductState = initialState, action): ProductState => {
  switch (action.type) {
    case 'displayProductCode':
      return { ...state, showProductCode: action.payload };
    default:
      return state;
  }
};
