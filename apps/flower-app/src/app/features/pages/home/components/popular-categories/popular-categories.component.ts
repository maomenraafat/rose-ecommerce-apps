import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategoryService } from 'apps/flower-app/src/app/shared/services/category/category.service';
import { LoadingSpinnerComponent } from "../../../../../shared/components/ui/loading-spinner.component";
@Component({
  selector: 'app-popular-categories',
  imports: [CommonModule, CarouselModule, LoadingSpinnerComponent],
  templateUrl: './popular-categories.component.html',
  styleUrl: './popular-categories.component.scss',
})
export class PopularCategoriesComponent implements OnInit {
  private _categoryService = inject(CategoryService);
  categoryList = this._categoryService.categoryList;
  isLoading = this._categoryService.isLoadingCategory;
  customOptions: OwlOptions = {
    autoWidth: false,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  constructor() {}
  ngOnInit(): void {}
}
