import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { SubmitBtnComponent } from '../../../shared/components/submit-btn.component';

@Component({
  selector: 'app-special-gifts-slider',
  imports: [CommonModule, CarouselModule, SubmitBtnComponent],
  templateUrl: './special-gifts-slider.component.html',
  styleUrl: './special-gifts-slider.component.scss',
})
export class SpecialGiftsSliderComponent {
  sliderStore: { imgPath: string; altText: string }[] = [
    { imgPath: 'special-gifts1.jpg', altText: '' },
    { imgPath: 'special-gifts-2.jpg', altText: '' },
    { imgPath: 'special-gifts-3.jpg', altText: '' },
    { imgPath: 'special-gifts-4.jpg', altText: '' },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
}
