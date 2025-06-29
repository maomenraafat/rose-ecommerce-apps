import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { Slider } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-filters',
  imports: [CommonModule, FormsModule, CheckboxModule, Slider, InputTextModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  value: number = 60;


  rows: any[] = [
    { number: '5', key: 'one'},
    { number: '4', key: 'two'},
    { number: '3', key: 'three'},
    { number: '2', key: 'four'},
    { number: '1', key: 'five'},
  ];

  categories: any[] = [
    { name: 'Home & Living', key: 'Home', availableProducts: '9'},
    { name: 'Jewelry & Accessories', key: 'Jewelry', availableProducts: '13'},
    { name: 'Occasion Gifts', key: 'Occasion', availableProducts: '5'},
    { name: 'Occasion & Stationery', key: 'Stationery', availableProducts: '18'},
    { name: 'Other', key: 'Other', availableProducts: '11'}
  ];

  brands: any[] = [
      { name: 'Tovola', key: 'Tovola', availableProducts: '13'},
      { name: 'Sundoy', key: 'Sundoy', availableProducts: '9'},
      { name: 'Sahoo Gifts', key: 'Sahoo Gifts', availableProducts: '16'},
      { name: 'OCasterly', key: 'Casterly', availableProducts: '5'},
      { name: 'Mainden Gifts', key: 'Mainden Gifts', availableProducts: '11'}
  ];

  sales: any[] = [
      { name: 'On Sale', key: 'OnSale', availableProducts: '7'},
      { name: 'In Stock', key: 'InStock', availableProducts: '18'},
      { name: 'Out Of Stock', key: 'OutOfStock', availableProducts: '9'},
      { name: 'Discount', key: 'Discount', availableProducts: '13'},
  ];

  sizes: any[] = [
      { name: 'Extra Large', key: 'ExtraLarge'},
      { name: 'Large', key: 'Large'},
      { name: 'Medium', key: 'Medium'},
      { name: 'Small', key: 'Small'},
      { name: 'Extra Smal', key: 'ExtraSmall'}
  ];

}
