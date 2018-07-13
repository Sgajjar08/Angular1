import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http'; 

import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private _url: string = "/assets/product.json";

  constructor(private http: Http) { }
/* 
  getProduct(){ 
    return this.http.get(this._url).map((response: Response) => response.json());
  } */

  getProduct() {
    return this.http
      .get(this._url)
      .pipe(map(resp => {
        return resp.json();
      }));
  }
}
