import { catchError, map, of } from 'rxjs';
import { Component, computed, effect, inject, signal, Signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { Slider } from 'primeng/slider';
import { toSignal } from '@angular/core/rxjs-interop'; 
import { InputTextModule } from 'primeng/inputtext';
import { FiltersOptionsService } from '../../services/FiltersOptions/filters-options.service';
import { CategoryMini } from '../../interfaces/categoryRes';
import { OccasionMini } from '../../interfaces/occasionRes';
import { Store } from '@ngrx/store';
import { ProductsActions } from '../../../store/products/products.actions';
import { SalesAndSizes } from '../../interfaces/staticDataToDisplay';


@Component({
  selector: 'app-filters',
  imports: [CommonModule, FormsModule, CheckboxModule, Slider, InputTextModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  // Call Services
  private readonly _filtersOptionsService = inject(FiltersOptionsService)
  private store = inject(Store);

  // Variable
  value: number = 0;
  searchTerm = signal('');
  selectedCats = signal<Set<string>>(new Set());
  selectedOccs = signal<Set<string>>(new Set());
  selectedRating = signal<number | null>(null);

  readonly categories: Signal<CategoryMini[]> = toSignal(
  this._filtersOptionsService.getAllCategories().pipe(
    map(res => res.categories),
    catchError( (err) => of(err))
  ),
  { initialValue: [] }        
);

  readonly occasions: Signal<OccasionMini[]> = toSignal(
    this._filtersOptionsService.getAllOccasions().pipe(
      map( res => res.occasions),
      catchError( (err) => of(err))
    ),
    { initialValue: []}
  )

  rows: any[] = [
    { number: '5', key: 'one'},
    { number: '4', key: 'two'},
    { number: '3', key: 'three'},
    { number: '2', key: 'four'},
    { number: '1', key: 'five'},
  ];

  private uiFilters = computed(() => ({
    categories : Array.from(this.selectedCats()),
    occasions : Array.from(this.selectedOccs()),
    searchTerm : this.searchTerm(),
  }));

  private syncWithStore = effect(() => {
  this.store.dispatch(
    ProductsActions.applyFilters({ filters: this.uiFilters() })
  );
});

  toggle(set: WritableSignal<Set<string>>, id: string) {
    set.update(s => {
      const copy = new Set(s);
      copy.has(id) ? copy.delete(id) : copy.add(id);
      return copy;
    });
  }


  Search(e: Event) {
  const value = (e.target as HTMLInputElement | null)?.value ?? '';
  this.searchTerm.set(value); 
}

  clearAll() {
    this.selectedCats.set(new Set());
    this.selectedOccs.set(new Set());
    this.searchTerm.set('');
}

  sales: SalesAndSizes[] = [
    { name: 'On Sale', key: 'OnSale', availableProducts: '7'},
    { name: 'In Stock', key: 'InStock', availableProducts: '18'},
    { name: 'Out Of Stock', key: 'OutOfStock', availableProducts: '9'},
    { name: 'Discount', key: 'Discount', availableProducts: '13'},
  ];

  sizes: SalesAndSizes[] = [
    { name: 'Extra Large', key: 'ExtraLarge'},
    { name: 'Large', key: 'Large'},
    { name: 'Medium', key: 'Medium'},
    { name: 'Small', key: 'Small'},
    { name: 'Extra Smal', key: 'ExtraSmall'}
  ];

}
