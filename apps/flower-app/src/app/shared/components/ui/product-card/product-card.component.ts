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
    const fullStars     = Math.floor(averageRating);   
    const hasFraction   = averageRating % 1 !== 0;    
    if (starNumber <= fullStars) {
      return 'fa-solid fa-star filled';
    }
    if (hasFraction && starNumber === fullStars + 1) {
      return 'fa-solid fa-star-half-alt half-filled';
    }
    return 'fa-regular fa-star';
  }
}
