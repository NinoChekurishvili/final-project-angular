import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductService } from 'src/app/features/products/products.service';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';



@Component({
  selector: 'app-limited-products',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './limited-products.component.html',
  styleUrls: ['./limited-products.component.scss'],
  providers: [ProductService],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class LimitedProductsComponent implements OnInit {
  products: Product[] = [];


  constructor(private productService: ProductService, private router: Router, private cd: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products.slice(0, 4);

      this.cd.detectChanges();
      console.log(products);

    });
  }
}
