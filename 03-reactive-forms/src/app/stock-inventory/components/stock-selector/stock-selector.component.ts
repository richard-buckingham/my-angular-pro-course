import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {Product} from '../../models/product.interface'

@Component({
  selector: 'stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {
  
  @Input() parent: FormGroup;
  @Input() products: Product[];
  @Output() added = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
    console.log('this.products', this.products);
  }

  onAdd(): void {
    console.log('this.parent.get("selector").value', this.parent.get('selector').value);
    this.added.emit(this.parent.get('selector').value);
  }

}
