import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent {
  @Input() parent: FormGroup;

  // Get the stocks from the parent component
  get stocks() {
    console.log('in get Stocks...', (this.parent.get('stock') as FormArray).controls);
    return (this.parent.get('stock') as FormArray).controls;
  }
}
