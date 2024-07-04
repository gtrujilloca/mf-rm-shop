import { Component, Input, signal, WritableSignal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IProduct } from '../../types';

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
export class ProductComponent {
  @Input({
    required: true
  }) product!:IProduct;
}
