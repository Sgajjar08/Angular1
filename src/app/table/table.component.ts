import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  product = [];
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProduct()
      .subscribe(data => this.product =data);
  }

}
