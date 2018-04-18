import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from '../../shared/services/panier.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredientslist',
  templateUrl: './ingredientslist.component.html',
  styleUrls: ['./ingredientslist.component.css']
})
export class IngredientslistComponent implements OnInit {
  public ingredients: Ingredient[];
  private subscribtion: Subscription;


  constructor(private panierService: PanierService) { }

  ngOnInit() {
 
  this.subscribtion = this.panierService.panier.subscribe( (ingredients: Ingredient[])=>{
    this.ingredients = ingredients;
  })
}

  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }
}
