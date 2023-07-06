import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css'],
})
export class RechercheParNomComponent {
  nomProduit!: string;
  produits!: Produit[];
  allProduits!: Produit[];
  searchTerm!: string;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe((prods) => {
      console.log(prods);
      this.allProduits = prods;
    });
  }
  onKeyUp(filterText: string) {
    this.produits = this.allProduits.filter((item) =>
      item.nomProduit.toLowerCase().includes(filterText)
    );
  }

  rechercherProds() {
    this.produitService.rechercherParNom(this.nomProduit).subscribe((prods) => {
      this.produits = prods;
      console.log(prods);
    });
  }
}
