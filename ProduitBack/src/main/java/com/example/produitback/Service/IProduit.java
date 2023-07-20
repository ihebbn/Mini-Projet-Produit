package com.example.produitback.Service;

import com.example.produitback.Entity.Produit;

import java.util.List;

public interface IProduit {

    List<Produit> retrieveAllproduits();

    Produit addProduit(Produit p);

    Produit retrieveProduit(Long idProduit);

    void removeProduit(Long idProduit);

    Produit updateProduit(Long idProduit, Produit updatedProduit);



}
