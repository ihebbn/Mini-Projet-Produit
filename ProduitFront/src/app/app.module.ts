import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitListComponent } from './Components/produit-list/produit-list.component';
import {FormsModule} from "@angular/forms";
import { ProduitServiceService } from './Services/produit-service.service';
import { FilterPipe } from './filter.pipe';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';



@NgModule({
  declarations: [
    AppComponent,
    ProduitListComponent,
    FilterPipe,
    AddProductComponent,
    UpdateProductComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
  providers: [ProduitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
