import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitListComponent } from './Components/produit-list/produit-list.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'produit-list', pathMatch: 'full' },
  { path: 'produit-list', component: ProduitListComponent },
  { path: 'add-product', component: AddProductComponent }, 
  { path: 'update-product', component: UpdateProductComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
