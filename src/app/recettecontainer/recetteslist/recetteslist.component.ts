import { Component, OnInit } from '@angular/core';
import { Recette  } from '../../shared/models/recette.model';
import { RecetteService } from '../../shared/services/recette.service';

@Component({
  selector: 'app-recetteslist',
  templateUrl: './recetteslist.component.html',
  styleUrls: ['./recetteslist.component.css'],
  
})
export class RecetteslistComponent implements OnInit {
public recettes: Recette[];
public activeRecette: number = 0;
  constructor(private recetteService: RecetteService) { }

  ngOnInit() {
    this.recetteService.recettes.subscribe((recettes: Recette[]) => {this.recettes = recettes})
  }



}
