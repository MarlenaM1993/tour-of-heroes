import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroDetailPupUpComponent } from '../hero-detail-pup-up/hero-detail-pup-up.component';


export interface DialogData {
  hero: Hero;
}

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})

export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  openDialog(hero: Hero): void {
    const dialogRef = this.dialog.open(HeroDetailPupUpComponent, {
      width: '250px',
      data: { name: hero.name, id: hero.id }
    });

  }

  constructor(private heroService: HeroService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}