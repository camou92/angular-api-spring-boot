import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styleUrls: ['./recherche-par-categorie.component.css'],
})
export class RechercheParCategorieComponent implements OnInit {
  produits!: Produit[];
  IdCategorie!: number;
  categories!: Categorie[];

  constructor(private produitService: ProduitService) {}
  ngOnInit(): void {
    this.produitService.listeCategories().subscribe((cats) => {
      this.categories = cats._embedded.categories;
      console.log(cats);
    });

  }

  chargerProduits() {
    this.produitService.listeProduit().subscribe((prods) => {
      console.log(prods);
      this.produits = prods;
    });
  }
  onChange() {
    this.produitService
      .rechercherParCategorie(this.IdCategorie)
      .subscribe((prods) => {
        this.produits = prods;
      });
  }
}
