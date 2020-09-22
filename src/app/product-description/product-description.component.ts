import { ActivatedRoute, Params } from '@angular/router';
import { Album } from '../album';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: Album;

  constructor(private _productService: ProductService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._productService.getAlbum(params.id).subscribe(a => {
        console.log('a', a);
        this.albumInfo = a
      });
    });
  }
}
