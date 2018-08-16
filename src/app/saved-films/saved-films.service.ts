import { Injectable } from '@angular/core';
import { Film } from '../films/film';

@Injectable()
export class SavedFilmsService {

  getFilms() {
    const filmsJsonArray = localStorage.getItem('filmsArray');
    if(filmsJsonArray){
      return JSON.parse(filmsJsonArray);
    } else {
      return [];
    }
  }

  addFilm(newFilm: Film) {
    const filmsJsonArray = localStorage.getItem('filmsArray');
    let filmsArray = [];
    if(filmsJsonArray){
      filmsArray =  JSON.parse(filmsJsonArray);
    }
    filmsArray.push(newFilm);
    localStorage.setItem('filmsArray', JSON.stringify(filmsArray));
  }

  removeChosenFilm(element: Film) {
    let filmsArray = JSON.parse(localStorage.getItem('filmsArray'));
    filmsArray = filmsArray.filter(function( obj ) {
        return obj.imdbID !== element.imdbID;
    });
    localStorage.setItem('filmsArray', JSON.stringify(filmsArray));
  }

}
