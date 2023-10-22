import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  uid: string;
  Name: string;
  Unit: string;
  Weight: string;
  UnitCost: string;
}

@Injectable()

export class ProductService {
  private apiUrl = 'https://cloud.balance.ge/sm/o/Balance/4543/hs/Exchange/Items';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}