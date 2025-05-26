import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialGiftsBannar } from '../../models/staticDataToDisplay';

@Component({
  selector: 'app-special-gifts-bannar-card',
  imports: [CommonModule],
  templateUrl: './special-gifts-bannar-card.component.html',
  styleUrl: './special-gifts-bannar-card.component.scss',
})
export class SpecialGiftsBannarCardComponent {
  @Input() item: SpecialGiftsBannar = {} as SpecialGiftsBannar;
}
