import { Component, effect, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/interfaces/product';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { ProductsActions } from '../../../store/products/products.actions';
import { ProductCardComponent } from "../../../shared/components/ui/product-card/product-card.component";
import { selectFilteredProducts } from '../../../store/products/products.selectors';


@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  // Call services
  private store = inject(Store);

  // Variables
  products = toSignal<Product[]>(
    this.store.select(selectFilteredProducts),
    { initialValue: null }
  );

  private readonly _log = effect( () => {
    console.log('products Filters =>> ', this.products());
  })

    ngOnInit(): void {
    this.store.dispatch(ProductsActions.loadProducts());
  }

}
