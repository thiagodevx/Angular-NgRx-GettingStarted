import {Component, OnInit, OnDestroy} from '@angular/core';

import * as productSelectors from '../state/product.selectors';

import * as fromProduct from '../state/product.state';

import {Subscription} from 'rxjs';

import {Product} from '../product';
import {ProductService} from '../product.service';
import {Store} from '@ngrx/store';
import {ToggleProductCode, SetCurrentProduct, InitializeCurrentProduct} from '../state/product.action';


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  errorMessage: string;

  showProductCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;

  constructor(private productService: ProductService, private store: Store<fromProduct.State>) {}

  ngOnInit(): void {
    this.store.select(productSelectors.getCurrentProduct).subscribe(product => this.selectedProduct = product);
    this.store.select(productSelectors.getShowProductCode)
      .subscribe(showProductCode => this.showProductCode = showProductCode);

    this.productService.getProducts().subscribe({
      next: (products: Product[]) => this.products = products,
      error: (err: any) => this.errorMessage = err.error
    });
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new ToggleProductCode(value));
  }

  newProduct(): void {
    this.store.dispatch(new InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(new SetCurrentProduct(product));
  }

}
