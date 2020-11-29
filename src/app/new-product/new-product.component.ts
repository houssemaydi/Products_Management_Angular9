import { Product } from './../model/product.model';
import { CatalogueService } from './../services/catalogue.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
private currentProduct:Product;
  constructor(private catService :CatalogueService,private httpclient:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  onSaveProduct(data:any){
    this.catService.saveResource(this.catService.host+"/produits",data).subscribe(
      data=>{console.log(data);
     // this.router.navigateByUrl('/products')
    this.currentProduct=data;
    },
      err=>{
        console.log(err);
      }
    )
  }

}
