import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button (click)="navigateToProducts()">View collection</button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  constructor(private router: Router) { }
  navigateToProducts() {
    this.router.navigate(['/products'])
  }
}
