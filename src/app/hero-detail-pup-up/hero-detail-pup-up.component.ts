import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-hero-detail-pup-up',
  templateUrl: './hero-detail-pup-up.component.html',
  styleUrls: ['./hero-detail-pup-up.component.css']
})
export class HeroDetailPupUpComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
