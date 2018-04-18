import { Component, OnInit } from '@angular/core';
import { Recette } from './shared/models/recette.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent{
  title = 'app';

  recettes =new Recette ('Lazatatouilles','https://www.bettybossi.ch/static/rezepte/x/bb_etxx041101_0054a_x.jpg','Un poème à plusieurs couches: Lasagne gratinée fourrée de légumes et de poulet');


}

