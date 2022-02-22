import { NgModule } from '@angular/core';
import {  RouterModule , Routes} from "@angular/router";

import { CountryViewComponent } from './country/pages/country-view/country-view.component';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';

const routes: Routes =[
    {
        path: '',
        component: ByCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: ByRegionComponent,
    },
    {
        path: 'capital',
        component: ByCapitalComponent,

    },
    {
        path: 'country/:id',
        component: CountryViewComponent,

    },
    {
        path: '**',
        redirectTo: '/',

    },
        
]


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
     ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class AppRoutingModule {}