import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesList } from '../../../../interfaces/images-list';

@Component({
  selector: 'app-our-gallery',
  imports: [CommonModule],
  templateUrl: './our-gallery.component.html',
  styleUrl: './our-gallery.component.scss',
})
export class OurGalleryComponent {
  galleryItems: ImagesList[] = [
    {
      imageUrl: 'gallery-item-1.png',
      style: 'our-gallery-item col-12 sm:col-6 md:col-4  md:flex-order-4',
    },
    {
      imageUrl: 'gallery-item-2.png',
      style: 'our-gallery-item col-12 sm:col-6 md:col-4 md:flex-order-3 ',
    },
    {
      imageUrl: 'gallery-item-3.png',
      style: 'our-gallery-item col-12 sm:col-6 md:col-4  md:flex-order-2',
    },

    {
      imageUrl: 'gallery-item-5.png',
      style: 'our-gallery-item col-12 sm:col-6 md:col-4 md:flex-order-6 ',
    },
    {
      imageUrl: 'gallery-item-4.png',
      style: 'our-gallery-item sm:col col-12 md:flex-order-5 ',
    },
  ];
}
