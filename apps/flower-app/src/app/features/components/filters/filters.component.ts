import { catchError, map, of } from 'rxjs';
import { Component, effect, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { Slider } from 'primeng/slider';
import { toSignal } from '@angular/core/rxjs-interop'; 
import { InputTextModule } from 'primeng/inputtext';
import { FiltersOptionsService } from '../../services/FiltersOptions/filters-options.service';
import { CategoryMini } from '../../interfaces/categoryRes';
import { OccasionMini } from '../../interfaces/occasionRes';


@Component({
  selector: 'app-filters',
  imports: [CommonModule, FormsModule, CheckboxModule, Slider, InputTextModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  // Call Services
  private readonly _filtersOptionsService = inject(FiltersOptionsService)

  // Variable
  value: number = 60;

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

  private readonly _log = effect( () => {
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


  sales: any[] = [
      { name: 'On Sale', key: 'OnSale', availableProducts: '7'},
      { name: 'In Stock', key: 'InStock', availableProducts: '18'},
      { name: 'Out Of Stock', key: 'OutOfStock', availableProducts: '9'},
      { name: 'Discount', key: 'Discount', availableProducts: '13'},
  ];

  // sizes: any[] = [
  //     { name: 'Extra Large', key: 'ExtraLarge'},
  //     { name: 'Large', key: 'Large'},
  //     { name: 'Medium', key: 'Medium'},
  //     { name: 'Small', key: 'Small'},
  //     { name: 'Extra Smal', key: 'ExtraSmall'}
  // ];

}
