import { Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IProduct } from '../../types';
import { ShopService } from '@/app/services/shop.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  providers: [
  ],
})
export class ProductComponent implements OnInit {
  @Input({
    required: true,
    alias: 'id',
  }) productId: string = '';

  product!: WritableSignal<IProduct>;

  shopSrv = inject(ShopService);


  ngOnInit(): void {
    this.shopSrv.getSingleProduct(+this.productId)
      .subscribe(res => this.product.set(res));
  }
}
