import {Product} from '../product';
import * as fromRoot from '../../app.state';

export interface ProductState {
  showProductCode: boolean;
  currentProductId: number;
  products: Product[];
  currentProduct: Product;
}

export interface State extends fromRoot.State {
  products: ProductState;
}
