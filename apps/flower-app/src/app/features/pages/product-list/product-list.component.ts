import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from "../../components/filters/filters.component";
import { ProductsComponent } from "../../components/Products/products.component";

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FiltersComponent, ProductsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {}
