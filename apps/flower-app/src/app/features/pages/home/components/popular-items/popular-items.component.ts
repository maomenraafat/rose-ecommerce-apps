import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../../../shared/components/ui/product-card/product-card.component';
import { NavCategoriesComponent } from '../nav-categories/nav-categories.component';
import { Product } from 'apps/flower-app/src/app/shared/interfaces/product';
import { ProductService } from 'apps/flower-app/src/app/shared/services/product/product.service';
import { Subject, takeUntil } from 'rxjs';
import { ProductApiRes } from 'apps/flower-app/src/app/shared/interfaces/product-api-data';
import { LoadingSpinnerComponent } from "../../../../../shared/components/ui/loading-spinner.component";

@Component({
  selector: 'app-popular-items',
  imports: [CommonModule, ProductCardComponent, NavCategoriesComponent, LoadingSpinnerComponent],
  templateUrl: './popular-items.component.html',
  styleUrl: './popular-items.component.scss',
})
export class PopularItemsComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  productList!: Product[];
  categoryId: string = '';
  private readonly destroy$ = new Subject<void>();
  _productService = inject(ProductService);
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.isLoading = true;
    this._productService
      .getAllProducts(this.categoryId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: ProductApiRes) => {
          this.productList = res.products;
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
        },
        complete: () => {
          console.log('complete');
          this.isLoading = false;
        },
      });
  }

  onCategorySelect(categoryId: string) {
    this.categoryId = categoryId;
    this.getAllProducts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
