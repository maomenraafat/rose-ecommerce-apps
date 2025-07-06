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
import { FiltersActions } from '../../../store/filters/filters.actions';


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

  private readonly log = effect( () => {
    console.log('categories =>> ', this.categories());
    console.log('occasions =>> ', this.occasions());
  })

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
    const f = this.uiFilters(); 

    this.store.dispatch(FiltersActions.setSearchTerm({ term: f.searchTerm }));
    f.categories.forEach(id => this.store.dispatch(FiltersActions.toggleCategory({ id })));
    f.occasions.forEach(id => this.store.dispatch(FiltersActions.toggleOccasion({ id })));
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
  this.store.dispatch(FiltersActions.clearFilters());  
  this.selectedCats.set(new Set());
  this.selectedOccs.set(new Set());
  this.searchTerm.set('');
}

}
