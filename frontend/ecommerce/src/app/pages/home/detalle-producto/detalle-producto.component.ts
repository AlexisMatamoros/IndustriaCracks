import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../../services/shop/shop.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  public id;
  public productos;
  public detalleProducto;

  constructor(private activatedRoute:ActivatedRoute,
              private shopService:ShopService ) {

   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];

      this.shopService.getProductsImage()
      .subscribe(data => {
        this.productos = data;
        for (let prod of this.productos) {
            // console.log(prod.product_id.id);
            if (  prod.product_id.id === Number(this.id)) {

              this.detalleProducto = prod;
              console.log(this.detalleProducto);
              break;
            }
        }
      });

    });

  }


}
