import { Product } from '../product';
import * as fromRoot from '../../app.state';

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

export interface State extends fromRoot.State {
  products: ProductState;
}
