import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilmsComponent } from './films/films.component';
import { FilmsListComponent } from './films/films-list/films-list.component';

import { FilmsService } from './films/films.service';
import { FilmsDetailComponent } from './films/films-detail/films-detail.component';
import { APP_ROUTES } from './app.routes';
import { SavedFilmsComponent } from './saved-films/saved-films.component';
import { SavedFilmsService } from './saved-films/saved-films.service';
import { FilmsStartComponent } from './films/films-start.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatProgressSpinnerModule, MatTableModule } from "@angular/material";



@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmsListComponent,

    FilmsDetailComponent,
    SavedFilmsComponent,
    FilmsStartComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    APP_ROUTES,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [
    FilmsService,
    SavedFilmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }