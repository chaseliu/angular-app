import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alarts',
  templateUrl: './product-alarts.component.html',
  styleUrls: ['./product-alarts.component.css'],
})
export class ProductAlartsComponent {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  constructor() {}
}
