import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SpecialGiftsSliderComponent } from '../../components/special-gifts-slider/special-gifts-slider.component';
import { SubmitBtnComponent } from '../../../shared/components/submit-btn.component';
import { SpecialGiftsBannar, SpecialGiftsCards } from '../../interfaces/staticDataToDisplay';
import { SpecialGiftsCardsCardComponent } from '../../components/special-gifts-cards-card/special-gifts-cards-card.component';
import { SpecialGiftsBannarCardComponent } from '../../components/special-gifts-bannar-card/special-gifts-bannar-card.component';
import { PopularCategoriesComponent } from './components/popular-categories/popular-categories.component';
import { PopularItemsComponent } from './components/popular-items/popular-items.component';
import { Subject, takeUntil } from 'rxjs';
import { CategoryService } from '../../../shared/services/category/category.service';
import { CategoryApiRes } from '../../../shared/interfaces/category-api-data';
import { Category } from '../../../shared/interfaces/category';
import { OurGalleryComponent } from './components/our-gallery/our-gallery.component';
import { ThemeManagerService } from '../../../core/services/theme-manager/theme/theme-manager.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    SpecialGiftsSliderComponent,
    SubmitBtnComponent,
    SpecialGiftsCardsCardComponent,
    SpecialGiftsBannarCardComponent,
    PopularCategoriesComponent,
    PopularItemsComponent,
    OurGalleryComponent,
    ToggleSwitchModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  // Call Services
  public readonly _themeManager = inject(ThemeManagerService);
  private readonly _categoryService = inject(CategoryService);


  // Variables
  private readonly destroy$ = new Subject<void>();
  categoryList!: Category[];
  themeValue: boolean = false;

  specialGiftsCards: SpecialGiftsCards[] = [
    {
      img: 'occasion-gifts-1.png',
      title: 'Gifts Box',
      describtion: 'Awesome Gifts Box Collectons',
      buttonContent: 'Shop Now',
    },
    {
      img: 'occasion-gifts-2.png',
      title: 'Occasion Gifts',
      describtion: 'Best Occasion Gifts Collections',
      buttonContent: 'Discover Now',
    },
    {
      img: 'occasion-gifts-3.png',
      title: 'Occasion Gifts',
      describtion: 'Combo Sets Gift Box Up To 50% Off',
      buttonContent: 'Discover Now',
    },
  ];

  specialGiftsBannar: SpecialGiftsBannar[] = [
    {
      img: 'Icon.png',
      title: 'Free Delivery',
      describtion: 'Orders Over $120',
    },
    {
      img: 'Icon (1).png',
      title: 'Get Refund',
      describtion: 'Within 30 Days Returns',
    },
    {
      img: 'Icon (2).png',
      title: 'Safe Payment',
      describtion: '100% Secure Payment',
    },
    {
      img: 'Icon (3).png',
      title: '24/7 Support',
      describtion: 'Feel Free To Call Us',
    },
  ];

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

  toggleTheme() {
    console.log(this.themeValue);
    this._themeManager.toggleTheme();
  }

  getUserPrefFromCookies() {
    const theme = this._themeManager.getCurrentTheme();
    if (theme == 'dark') {
      this.themeValue = true;
    }
  }

  ngOnInit(): void {
    this.getAllCategories();
    this._themeManager.initTheme();
    this.getUserPrefFromCookies();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
