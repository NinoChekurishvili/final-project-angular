import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button (click)="navigateToProducts()">View collection</button>`,
  styles: [`
    button {
      display: flex;
      padding: 16px 32px;
    gap: 10px;
}
  `]
})
export class ButtonComponent {

  constructor(private router: Router) { }
  navigateToProducts() {
    this.router.navigate(['/products'])
  }
}
