import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  getProducts(params: {category_id?: string; category_slug?:string}) {
    const url = new URL(`${environment.apiUrl}/api/v1/products`);
    if (params.category_id) {
      url.searchParams.set('categoryId', params.category_id);
    }
    if (params.category_slug) {
      url.searchParams.set('categorySlug', params.category_slug);
    }

    return this.http.get<Product[]>(url.toString()).pipe(
      map((products) =>
        products.map((product) => ({
          ...product,
          images: product.images.map(
            () => 'https://picsum.photos/640/640?r=' + Math.random(),
          ),
        })),
      ),
    );
  }

  getOne(id: string) {
    const url = `${environment.apiUrl}/api/v1/products/${id}`
    return this.http.get<Product>(url)
      .pipe(
        map((product) => ({
          ...product,
          images: product.images?.length
            ? product.images.map(
              () => 'https://picsum.photos/640/640?r=' + Math.random(),
            )
            : ['https://picsum.photos/640/640?r=' + Math.random()],
        })),
      );
  }
}
