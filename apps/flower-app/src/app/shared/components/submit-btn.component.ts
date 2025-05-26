import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submit-btn',
  imports: [CommonModule],
  templateUrl: './submit-btn.component.html',
  styleUrl: './submit-btn.component.scss',
})
export class SubmitBtnComponent {
  @Input() icon:boolean = false;
  @Input() rounded:boolean = false;
}
