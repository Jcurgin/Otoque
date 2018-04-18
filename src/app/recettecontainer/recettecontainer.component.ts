import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../shared/services/recette.service';



@Component({
  selector: 'app-recettecontainer',
  templateUrl: './recettecontainer.component.html',
  styleUrls: ['./recettecontainer.component.css'],
  providers :[RecetteService]
})
export class RecettecontainerComponent implements OnInit {


  
  constructor() { }

  ngOnInit() {
 
  }

  }
