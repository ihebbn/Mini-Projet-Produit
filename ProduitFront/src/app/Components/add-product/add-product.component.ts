import { Component } from '@angular/core';
import { Produit } from '../../Model/produit';
import { ProduitServiceService } from 'src/app/Services/produit-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  
  newProduct: Produit = new Produit(); // create a new event object to hold form data
   
  constructor(private produitservice: ProduitServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Submitting form:', this.newProduct);
    this.produitservice.addProduit(this.newProduct).subscribe(
      response => {
        console.log('Server response:', response);
      },
      error => {
        console.log('Error:', error);
      }
    );
  }

  addproduit() {
    this.produitservice.addProduit(this.newProduct).subscribe();
    this.newProduct = new Produit();
  }

}
