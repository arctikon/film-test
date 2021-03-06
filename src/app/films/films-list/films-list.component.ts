import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router} from '@angular/router';

import { FilmsService } from '../films.service';
import { Film } from '../film';

@Component({
  selector: 'loaded-films-list',
  templateUrl: './films-list.component.html'
})
export class FilmsListComponent implements OnInit {

  films: Film[] = [];
  titleValue: any;
  filmFormControl = new FormControl();
  count = 1;
  isDone = true;

  constructor(
    private filmService: FilmsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.filmFormControl.valueChanges
      .debounceTime(200)
      .subscribe(newValue => {
        this.isDone = false;
          this.titleValue = newValue;
          this.filmService.getFilms(newValue)
            .subscribe(
              data => {
                if (data.Response !== 'False') {
                  const myArr = [];
                  for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                      myArr.push(data[key]);
                    }
                  }
                  this.count = 1;
                  this.films = myArr[0];
                  this.isDone = true;
                } else {
                  this.isDone = true;
                  this.films.length = null;
                }
                  this.router.navigate(['/films'], {queryParams: {q: this.titleValue}});
                  if (this.titleValue === '') {
                    this.router.navigate(['/films']);
                  }
              }
            );
        }
      );
  }

  onNext() {
      this.count++;
    this.isDone = false;
    this.filmService.getNextFilms(this.titleValue, this.count)
      .subscribe(
        data => {
          if (data.Response !== 'False') {
            const myArr = [];
            for (const key in data) {
              if (data.hasOwnProperty(key)) {
                myArr.push(data[key]);
              }
            }
            this.films = myArr[0];
            this.isDone = true;
          }else {
            this.isDone = true;
            this.films = null;
          }
          this.router.navigate(['films'], {queryParams: {q: this.titleValue, page: this.count}});
        }
      );
  }

  onPrevious() {
    this.count--;
    this.isDone = false;
    this.filmService.getNextFilms(this.titleValue, this.count)
      .subscribe(
        data => {
          if (data.Response !== 'False') {
            const myArr = [];
            for (const key in data) {
              if (data.hasOwnProperty(key)) {
                myArr.push(data[key]);
              }
            }
            this.films = myArr[0];
            this.isDone = true;
          }else {
            this.isDone  = true;
            this.films = null;
          }
          this.router.navigate(['films'], {queryParams: {q: this.titleValue, page: this.count}});
        }
      );
  }
}
