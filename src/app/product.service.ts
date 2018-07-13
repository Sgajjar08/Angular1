import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http'; 


import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _url: string = "/assets/product.json";

  constructor(private http: Http) { }
/* 
  getProduct(){ 
    return this.http.get(this._url).map((response: Response) => response.json());
  } */
  getProduct(){
    return this.http.get(this._url).map((response: Response) => response.json());
  }
}
