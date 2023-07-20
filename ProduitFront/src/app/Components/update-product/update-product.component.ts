import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/Model/produit';
import { ProduitServiceService } from 'src/app/Services/produit-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: any;
  uproduit: Produit = new Produit();

  constructor(
    private produitservice: ProduitServiceService,
    private route: ActivatedRoute,
    private routerNav: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.produitservice.getProduitById(this.id).subscribe(
      (res: Produit) => {
        console.log(res);
        this.uproduit = res;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateProduit() {
    console.log('Updating product:', this.uproduit);
    this.produitservice.updateProduit(this.id, this.uproduit).subscribe(
      (response) => {
        console.log('Product updated successfully:', response);
      },
      (error) => {
        console.error('Error updating product:', error);
      }
    );
  }
}
