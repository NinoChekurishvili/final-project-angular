import { ChangeDetectorRef, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductService } from './products.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ButtonComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  allProducts: Product[] = [];
  displayProducts: Product[] = [];
  itemToShow = 12;

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.allProducts = data;
      this.loadMore();
      console.log(this.allProducts);
      this.cdr.detectChanges();
    });
  }

  loadMore() {
    const nextItems = this.allProducts.slice(this.displayProducts.length, this.displayProducts.length + this.itemToShow);
    this.displayProducts = this.displayProducts.concat(nextItems);
  }
  moreToLoad(): boolean {
    return this.displayProducts.length < this.allProducts.length;
  }
}
