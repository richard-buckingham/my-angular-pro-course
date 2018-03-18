import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent {
  @Input() parent: FormGroup;
  @Output() removed = new EventEmitter<any>();

  // Get the stocks from the parent component
  get stocks() {
    console.log('in get Stocks...', (this.parent.get('stock') as FormArray).controls);
    return (this.parent.get('stock') as FormArray).controls;
  }

  onRemove(group, index): void {
    this.removed.emit({group, index});
  }
}
