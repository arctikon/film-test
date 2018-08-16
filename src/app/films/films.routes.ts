import { Routes } from '@angular/router';

import { FilmsStartComponent } from './films-start.component';
import { FilmsDetailComponent } from './films-detail/films-detail.component';

export const FILMS_ROUTES: Routes = [
  { path: '', component: FilmsStartComponent },
  { path: ':q/:id', component: FilmsDetailComponent },
  { path: ':q/:id/:season', component: FilmsDetailComponent }
];
