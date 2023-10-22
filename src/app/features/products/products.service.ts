import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  InternalArticle: string;
  Name: string;
  Unit: string;
  AdditionalRequisites1: string;
  Weight: string;
  Price: number;
}

@Injectable()

export class ProductService {
  private apiUrl = 'https://cloud.balance.ge/sm/o/Balance/4543/hs/Exchange/Items';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);


  }
}