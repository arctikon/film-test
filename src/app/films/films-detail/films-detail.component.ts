import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription} from 'rxjs/Subscription';
import { FilmsService } from '../films.service';
import { SavedFilmsService } from '../../saved-films/saved-films.service';
import { Location } from '@angular/common';


@Component({
  selector: 'films-detail',
  templateUrl: './films-detail.component.html',
  styleUrls: ['./films-detail.component.css']
})
export class FilmsDetailComponent implements OnInit, OnDestroy {

 selectedFilm: any;
 filmsIndex: any;
 private subscription: Subscription;
 seasons: number[] = [];
 isAdd = false;
 isDone = false;
 linkToImdb: any;
 titleValue: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmsService: FilmsService,
    private savedFilmsService: SavedFilmsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.isDone = false;
        this.filmsIndex = params['id'];
        this.titleValue = params['q'];
        this.filmsService.getDetails(this.filmsIndex).subscribe(
          data => {
            if (data.Type === 'series') {
              const myArr = [];
              for (let i = 1; i <= +data.totalSeasons; i++) {
                myArr.push(i);
              }
              this.seasons = myArr;
            }
            this.selectedFilm = data;
            this.isDone = true;
            this.isAdd = false;
          }
        );
      }
    );
  }

  onAddToCompareList() {
    this.isAdd = !this.isAdd;
    this.savedFilmsService.addFilm(this.selectedFilm);
  }

  onSelectedSeasons(season: any) {
    this.router.navigate(['/films', this.titleValue, this.filmsIndex, season]);
  }

  onClickedBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
