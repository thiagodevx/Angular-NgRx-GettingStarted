import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from './product.state';
import { currentId } from 'async_hooks';

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(getProductFeatureState, state => state.showProductCode);
export const getProducts = createSelector(getProductFeatureState, state => state.products);
export const getCurrentProductId = createSelector(getProductFeatureState, state => state.currentProductId);
export const getCurrentProduct = createSelector(getProductFeatureState, getCurrentProductId, (state, id) =>
  state.products.find(product => product.id === id));
