package com.example.produitback.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table( name = "Produit")
public class Produit implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idProduit")
    private Long idProduit;
    private String Nom;
    private Long prixUnitaire;
    private Long quantite;

}
