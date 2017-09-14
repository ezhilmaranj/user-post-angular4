import {Router, RouterModule} from '@angular/router';


import {HomeComponent} from '../app/home/home.component';
import {NotFoundComponent} from '../app/not-found/not-found.component';


export const appRouting = RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: '**', component: NotFoundComponent}
]);