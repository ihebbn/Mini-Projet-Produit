import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../Model/produit";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

  constructor(private http : HttpClient) { }

  addProduit(produit: Produit): Observable<Produit> {
    const url = `http://localhost:8089/pidev/add-produit`;
    return this.http.post<Produit>(url, produit);
  }

  getProduit(){
    return this.http.get<Produit[]>("http://localhost:8089/pidev/retrieve-all-produits")
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  deleteProduit(id:number){
    const url = `http://localhost:8089/pidev/remove-produit/${id}`;
    return this.http.delete(url);
  }

  getProduitById(productId: number): Observable<Produit> {
    const url = `http://localhost:8089/pidev/produits/${productId}`;
    return this.http.get<Produit>(url);
  }
  
  


  updateProduit(productId: number, updatedProduit: Produit): Observable<any> {
    const url = `http://localhost:8089/pidev/produits/${productId}`;
    return this.http.put<any>(url, updatedProduit);
  }

}
