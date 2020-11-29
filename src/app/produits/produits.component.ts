import { CatalogueService } from './../services/catalogue.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  public produits:any;
  public size:number=5;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;
  public currentKeyword:string;
  constructor(private catService :CatalogueService,private httpclient:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  onGetProducts(){
    this.catService.getProducts(this.currentPage,this.size)
   .subscribe(
    data=>{
    this.totalPages= data["page"].totalPages;
    this.pages=new Array<number>(this.totalPages);
//kenet awel wahdha w habetneha ban9As probeleme hot nb pages yetcharja 9bal
    this.produits= data; },
    err=>{console.log(err);}
    ); 
  }

  onPageProduct(i){
    this.currentPage=i;
   // this.onGetProducts();
    this.chercherProduits();

  }

  onChercher(form:any){
    this.currentPage=0;
    this.currentKeyword=form.keyword;
    this.chercherProduits();
  }
  chercherProduits(){
    this.catService.getProductsByKeyword(this.currentKeyword,this.currentPage,this.size)
    .subscribe(
     data=>{
     this.totalPages= data["page"].totalPages;
     this.pages=new Array<number>(this.totalPages);
 //kenet awel wahdha w habetneha ban9As probeleme hot nb pages yetcharja 9bal
     this.produits= data; },
     err=>{console.log(err);}
     ); 
  }

  onDeleteProduct(p){
   
      this.catService.deleteResource(p.id).subscribe( data =>{
        this.chercherProduits();
      },err=>{
        console.log(err)
      })
    }
  
    onEditProduct(p){
      let url=p._links.self.href;
      this.router.navigateByUrl("/edit-product/"+btoa(url))
    }
}
