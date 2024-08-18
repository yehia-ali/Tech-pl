import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient);

  constructor() { }
  getProductsList() : Observable<any> {
    return this.http.get(`${environment.envUrl}/products`);
  }
  getProductsByCategory(category: string) {
    return this.http.get(`${environment.envUrl}/products/category/${category}`);
  }
  getCategoryList() {
    return this.http.get(`${environment.envUrl}/products/category-list`);
  }
  searchProducts(query: string): Observable<any> {
    return this.http.get(`${environment.envUrl}/products/search?q=${query}`);
  }
}
