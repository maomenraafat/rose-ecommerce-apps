import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialGiftsSliderComponent } from "../../components/special-gifts-slider.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, SpecialGiftsSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
