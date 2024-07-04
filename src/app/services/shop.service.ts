import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct, IProductDto } from '@/app/types';
import { mapProduct } from '@/app/utils';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private readonly baseUrl = "https://fakestoreapi.com";

  http = inject(HttpClient);

  getProducts(limit?: number): Observable<IProduct[]> {
    let url = `${this.baseUrl}/products`;
    if (limit) url += `?limit=${limit}`;

    return this.http.get<IProductDto[]>(url).pipe(
      map(res => res.map(p => mapProduct(p)))
    );
  }

  getSingleProduct(id: number): Observable<IProduct> {
    return this.http.get<IProductDto>(`${this.baseUrl}/products/${id}`).pipe(
      map(res => mapProduct(res))
    );
  }

}
