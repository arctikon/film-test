import { Component, OnInit } from '@angular/core';
import { SavedFilmsService } from './saved-films.service';
import { Film } from '../films/film';

@Component({
  selector: 'saved-films',
  templateUrl: './saved-films.component.html',
  styleUrls: ['./saved-films.component.css']
})
export class SavedFilmsComponent implements OnInit {

  films: Film[] = [];

  displayedColumns: string[] = ['id', 'name', 'weight', 'symbol'];

  constructor(private savedFilmsService: SavedFilmsService) { }

  ngOnInit() {
    this.films = this.savedFilmsService.getFilms();
  }

  onDelete(element: Film) {
    this.savedFilmsService.removeChosenFilm(element);
    this.films = this.savedFilmsService.getFilms();
  }
}
