import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecetteslistComponent } from './recettecontainer/recetteslist/recetteslist.component';
import { RecettesdetailsComponent } from './recettecontainer/recettesdetails/recettesdetails.component';
import { RecettecontainerComponent } from './recettecontainer/recettecontainer.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierComponent } from './panier/panier.component';

import { AppRouting } from './app.routing';
import { PanierService } from './shared/services/panier.service';
import { RecetteeditComponent } from './recettecontainer/recetteedit/recetteedit/recetteedit.component';
import { IngredientslistComponent } from './panier/ingredientslist/ingredientslist.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecetteslistComponent,
    RecettesdetailsComponent,
    RecettecontainerComponent,
    ActiveDirective,
    PanierComponent,
    RecetteeditComponent,
    IngredientslistComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },
  PanierService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
