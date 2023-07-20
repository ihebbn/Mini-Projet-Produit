package com.example.produitback.Repository;

import com.example.produitback.Entity.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {

    @Query("SELECT p FROM Produit p WHERE " +
            "p.Nom LIKE CONCAT('%',:query, '%')" )
    List<Produit> searchProduit(String query);
}
