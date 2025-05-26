import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularCategoriesComponent } from './components/popular-categories/popular-categories.component';
import { PopularItemsComponent } from './components/popular-items/popular-items.component';
import { Subject, takeUntil } from 'rxjs';
import { CategoryService } from '../../../shared/services/category/category.service';
import { CategoryApiRes } from '../../../shared/interfaces/category-api-data';
import { Category } from '../../../shared/interfaces/category';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PopularCategoriesComponent, PopularItemsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly destroy$ = new Subject<void>();
  private readonly _categoryService = inject(CategoryService);
  categoryList!: Category[];

  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories() {
    this._categoryService.isLoadingCategory.set(true);
    this._categoryService
      .getAllCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: CategoryApiRes) => {
          this._categoryService._categoryList.set(res.categories);
          this._categoryService.isLoadingCategory.set(false);
        },
        error: (err) => {
          console.log(err);
          this._categoryService.isLoadingCategory.set(false);
        },
        complete: () => {
          console.log('complete');
          this._categoryService.isLoadingCategory.set(false);
        },
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
