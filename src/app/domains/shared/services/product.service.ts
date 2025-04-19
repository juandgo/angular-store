import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  constructor() { }

  getProducts(category_id?: string){
    const url = new URL('https://api.escuelajs.co/api/v1/products');
    if (category_id) {
      url.searchParams.set('categoryId', category_id);
    }

    return this.http.get<Product[]>(url.toString()).pipe(
      map(products =>
        products.map(product => ({
          ...product,
          images: product.images.map(() =>
            'https://picsum.photos/640/640?r=' + Math.random()
          )
        }))
      )
    );
  }

  getOne(id: string) {
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`).pipe(
      map(product => ({
        ...product,
        images: product.images?.length
          ? product.images.map(() =>
              'https://picsum.photos/640/640?r=' + Math.random()
            )
          : ['https://picsum.photos/640/640?r=' + Math.random()]
      }))
    );
  }
  
}