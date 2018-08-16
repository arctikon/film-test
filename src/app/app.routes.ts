import { RouterModule, Routes} from '@angular/router';
import { FILMS_ROUTES } from './films/films.routes';

import { FilmsComponent } from './films/films.component';
import { SavedFilmsComponent } from './saved-films/saved-films.component';
import { NotFoundComponent } from './not-found/not-found.component';

const APP_ROUTES_PROVIDERS: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: FilmsComponent, children: FILMS_ROUTES },
  { path: 'saved-films', component: SavedFilmsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const APP_ROUTES = RouterModule.forRoot(APP_ROUTES_PROVIDERS, {useHash: true});
