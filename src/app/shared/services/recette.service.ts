import { Injectable } from '@angular/core';
import { Recette } from '../models/recette.model';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class RecetteService {
  public recettes: BehaviorSubject<Recette[]> = new BehaviorSubject([
    new Recette (
    'Lazatatouilles',
    'https://www.bettybossi.ch/static/rezepte/x/bb_etxx041101_0054a_x.jpg',
    'Un poème à plusieurs couches: Lasagne gratinée fourrée de légumes et de jambon',
    [
      new Ingredient('poulet',1),
      new Ingredient('bechamel',2),
      new Ingredient('creme fraiche',3),
      
    ]
  ),
    new Recette (
    'Frangipomme',
    'http://p5.storage.canalblog.com/56/84/309278/15650525.jpg',
    'Délicieuse rencontre de la tarte aux pommes et de la galette des rois',

    [
      new Ingredient('noisette',1),
      new Ingredient('chocolat',2),
      new Ingredient('poire',3),
      
    ]

  ),
    new Recette (
    'Colombo',
    'http://www.avekapeti.com/uploads/cache/plat_picture_carousel/uploads/1516389195-avekapeti-colombo2copie.jpg', 
    'Ce plat antillais est très simple à réaliser, surtout si vous suivez pas à pas mes conseils. Vous obtiendrez ainsi un colombo de cabri à la sauce onctueuse',

    [
      new Ingredient('Cabri',1),
      new Ingredient('Courgette',2),
      new Ingredient('Carrotte',3),
      
    ]
  )
  ])

  public recette: BehaviorSubject<Recette> = new BehaviorSubject(this.recettes.value[0])




  getRecette(index: number): Recette {
    return this.recettes.value[index];
  }
  constructor() { }

}
