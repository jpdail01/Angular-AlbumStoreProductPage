import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Album } from './album';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/albums.json';
  private _productsUrl = '../assets/products.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl)
      .pipe(
        map(response => <Album[]>response.json()),
        map(data => {
          // console.log('data', data);
          // const result = data.filter(x => x.id === id);
          return data[0]; // result;
        }),
        // map(a => {
        //   console.log('a', a);
        //   return a[0];
        // })
      );
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl)
      .map(response => <Product[]>response.json());
  }

  getAlbums(): Observable<Album[]> {
    return this._http.get(this._albumUrl)
      .map(response => <Album[]>response.json());
  }
}
