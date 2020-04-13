import {ProductState} from './product.state';
import {ProductActions, ProductActionTypes} from './product.action';

const initialState: ProductState = {
  showProductCode: false,
  products: [],
  currentProductId: null,
  currentProduct: null
};

export const ProductReducer = (state: ProductState = initialState, action: ProductActions): ProductState => {
  switch (action.type) {
    case ProductActionTypes.ToogleProductCode:
      return {...state, showProductCode: action.payload};
    case ProductActionTypes.SetCurrentProduct:
      return {...state, currentProduct: action.payload};
    case ProductActionTypes.ClearCurrentProduct:
      return {...state, currentProduct: null};
    case ProductActionTypes.InitializeCurrentProduct:
      return {
        ...state, currentProduct: {
          id: 0,
          productCode: 'New',
          productName: '',
          description: '',
          starRating: 0
        }
      };
    default:
      return state;
  }
};
