import {Component, OnInit} from '@angular/core';
import {Produit} from "../../Model/produit";
import {ProduitServiceService} from "../../Services/produit-service.service";
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit{
  produits!: any;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];
  title = 'Angular Search Using ng2-search-filter';
  searchText!: any;

  constructor(private produitservice: ProduitServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.afficher()
    console.log(this.afficher);
  }


  

  afficher() {

  
    this.produitservice.getProduit().subscribe((response: any) => {
      this.produits = response;
      console.log("jjgjh", this.produits);

      
    },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  

  reloadData() {
    this.produits = this.produitservice.getProduit();
  }

  OndeleteClick = (id: number) => {
    if (confirm('Are you sur you want to delete this product?')) {
      this.produitservice.deleteProduit(id).subscribe(() => {
        // Recharge la page après la suppression
        window.location.reload();
      });
    }
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.afficher();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.afficher();
  }

  redirectToAddProduct() {
    this.router.navigate(['/add-product']);
  }

  redirectToUpdateProduct() {
    this.router.navigate(['/update-product']); // Navigate to the update-product route
  }




  



  
}
