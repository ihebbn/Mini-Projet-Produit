package com.example.produitback.Service;

import com.example.produitback.Entity.Produit;
import com.example.produitback.Repository.ProduitRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ProduitService implements IProduit {

    @Autowired
    private ProduitRepository produitRepository;


    @Override
    public List<Produit> retrieveAllproduits() {
        return produitRepository.findAll();
    }


    @Override
    public Produit addProduit(Produit p) {
        return produitRepository.save(p);
    }


    @Override
    public Produit retrieveProduit(Long idProduit) {
        return produitRepository.findById(idProduit).get();
    }

    @Override
    public void removeProduit(Long idProduit) {
        produitRepository.deleteById(idProduit);
    }


    @Override
    public Produit updateProduit(Long idProduit, Produit updatedProduit) {
        Optional<Produit> optionalProduit = produitRepository.findById(idProduit);
        if (optionalProduit.isPresent()) {
            Produit produit = optionalProduit.get();
            produit.setNom(updatedProduit.getNom());
            produit.setPrixUnitaire(updatedProduit.getPrixUnitaire());
            produit.setQuantite(updatedProduit.getQuantite());
            return produitRepository.save(produit);
        } else {
            return null;
        }
    }


}
