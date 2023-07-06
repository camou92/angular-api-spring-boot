import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css'],
})
export class UpdateCategorieComponent {
  @Input()
  categorie!: Categorie;

  @Input()
  ajout!: boolean;

  @Output()
  categorieUpdated = new EventEmitter<Categorie>();

  saveCategorie() {
    this.categorieUpdated.emit(this.categorie);
  }
}
