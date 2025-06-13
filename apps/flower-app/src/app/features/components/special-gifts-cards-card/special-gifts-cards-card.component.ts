import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialGiftsCards } from '../../models/staticDataToDisplay';

@Component({
  selector: 'app-special-gifts-cards-card',
  imports: [CommonModule],
  templateUrl: './special-gifts-cards-card.component.html',
  styleUrl: './special-gifts-cards-card.component.scss',
})
export class SpecialGiftsCardsCardComponent {
  @Input() item: SpecialGiftsCards = {} as SpecialGiftsCards;
}
