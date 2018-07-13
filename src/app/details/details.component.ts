import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: any;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProduct()
      .subscribe(resp => {
        this.product = resp;
        console.log(this.product);
      });
  }
}
