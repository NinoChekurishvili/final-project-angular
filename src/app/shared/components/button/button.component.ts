import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button (click)="handleClick()">{{ buttonText }}</button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() navigationPath: string | null = null;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) { }

  handleClick() {
    if (this.navigationPath) {
      this.router.navigate([this.navigationPath]);
    }
    this.buttonClick.emit();
  }
}
