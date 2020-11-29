import { EditProductComponent } from './edit-product/edit-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProduitsComponent } from './produits/produits.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"products",
    component: ProduitsComponent
  },  {
    path:"new-product",
    component: NewProductComponent
  }, {
    path:"edit-product/:id",
    component: EditProductComponent
  },{
    path:"",
redirectTo:"/products",
pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
