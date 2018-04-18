import { Route, RouterModule } from '@angular/router';

import { RecettecontainerComponent } from './recettecontainer/recettecontainer.component';
import { RecettesdetailsComponent } from './recettecontainer/recettesdetails/recettesdetails.component';
import { RecetteeditComponent } from './recettecontainer/recetteedit/recetteedit/recetteedit.component';
import { PanierComponent } from './panier/panier.component';



const APP_ROUTE: Route[] = [
    { path: '',redirectTo: 'recettes', pathMatch: 'full'},
    { path: 'panier', component: PanierComponent},
    { path: 'recettes', component: RecettecontainerComponent, children:[
        {path: '', component: RecettesdetailsComponent },
        {path: 'new', component: RecetteeditComponent },
        {path: ':index', component: RecettesdetailsComponent },
        {path: ':index/edit', component: RecetteeditComponent }
    ]},
]

export const AppRouting = RouterModule.forRoot(APP_ROUTE);