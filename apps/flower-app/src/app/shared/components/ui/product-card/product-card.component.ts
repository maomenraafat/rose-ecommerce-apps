import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;
  getStarClass(starNumber: number, averageRating: number): string {
    if (averageRating >= starNumber) {
      return 'fa-solid fa-star filled';
    } else if (averageRating >= starNumber - 0.5) {
      return 'fa-solid fa-star-half-alt half-filled';
    } else {
      return 'fa-regular fa-star';
    }
  }
}
