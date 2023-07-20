package com.example.produitback.Controller;

import com.example.produitback.Entity.Produit;
import com.example.produitback.Service.ProduitService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@AllArgsConstructor
public class ProduitController {

    ProduitService produitService;

    @PostMapping("/add-produit")
    public Produit addProduit(@RequestBody Produit p) {
        Produit produit = produitService.addProduit(p);
        return produit;
    }


    @GetMapping("/retrieve-all-produits")
    public List<Produit> getproduit () {
        List<Produit> listProduit = produitService.retrieveAllproduits();
        return listProduit;
    }


    @GetMapping("/retrieve-produit/{produit-id}")
    public Produit retrieveProduit(@PathVariable("produit-id") Long idProduit) {
        return produitService.retrieveProduit(idProduit);
    }


    @DeleteMapping("/remove-produit/{produit-id}")
    public void removeproduit(@PathVariable("produit-id") Long idProduit) {
        produitService.removeProduit(idProduit);
    }

    @PutMapping("/produits/{idproduit}")
    public Produit updateProduit(@PathVariable Long idproduit, @RequestBody Produit updatedProduit) {
        return produitService.updateProduit(idproduit, updatedProduit);
    }
}
