import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from 'apps/flower-app/src/app/shared/services/category/category.service';

@Component({
  selector: 'app-nav-categories',
  imports: [CommonModule],
  templateUrl: './nav-categories.component.html',
  styleUrl: './nav-categories.component.scss',
})
export class NavCategoriesComponent implements OnInit {
  private _categoryService = inject(CategoryService);
  categoryList = this._categoryService.categoryList;
  @Output() categorySelected = new EventEmitter<string>();
  activeCategoryId: string | null = null;

  ngOnInit(): void {
    if (this.categoryList().length > 0) {
      this.activeCategoryId = this.categoryList()[0]._id;
      this.categorySelected.emit(this.activeCategoryId);
    }
  }

  handleCategoryClick(categoryId: string): void {
    this.activeCategoryId = categoryId;
    this.categorySelected.emit(categoryId);
  }
}
