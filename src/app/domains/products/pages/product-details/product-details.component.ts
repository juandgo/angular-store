import { Component, inject, Input, signal, OnInit } from '@angular/core';
import { ProductService } from '@shared/services/product.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
@Component({
  selector: 'app-product-details',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export default class ProductDetailsComponent implements OnInit {
  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit() {
    if (this.id) {
      this.productService.getOne(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images && product.images.length > 0) {
            this.cover.set(product.images[0]);
          }
        },
      });
    }
  }

  changeCover(newImg: string) {
    this.cover.set(newImg);
  }

  addToCart() {
    const product = this.product(); //me suscribo a la señal para obtener el valor
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
