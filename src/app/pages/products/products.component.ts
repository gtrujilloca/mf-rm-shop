import { ProductComponent } from '@/app/components/product/product.component';
import { ShopService } from '@/app/services/shop.service';
import { IProduct } from '@/app/types';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [
    ProductComponent,
  ],
  providers: [],

})
export class ProductsComponent implements OnInit {
  products = signal<IProduct[]>([]);
  shopSrv = inject(ShopService);

  ngOnInit(): void {
    this.shopSrv.getProducts(8).subscribe(res => this.products.set(res));
  }

}
