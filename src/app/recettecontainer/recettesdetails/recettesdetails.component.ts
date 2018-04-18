import { Component, OnInit,Input } from '@angular/core';
import { Recette } from '../../shared/models/recette.model';
import { RecetteService } from '../../shared/services/recette.service';
import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from '../../shared/services/panier.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-recettesdetails',
  templateUrl: './recettesdetails.component.html',
  styleUrls: ['./recettesdetails.component.css']
})
export class RecettesdetailsComponent implements OnInit {
public recette: Recette;
public ingredients: Ingredient;
public index : number;

  constructor(private recetteService: RecetteService, private panierService: PanierService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if( params.index){
        this.index = params.index;
        this.recette = this.recetteService.getRecette(params.index);
      } else{
        this.index = 0;
        this.recette = this.recetteService.getRecette(0);
      }
     
    })
  }

  addPanier(ingredients:Ingredient[]): void{
    this.panierService.addIngredients(ingredients)
}

 getUrl(): string[] {
    return ['/recettes', this.index + '', 'edit' ]
 }
}