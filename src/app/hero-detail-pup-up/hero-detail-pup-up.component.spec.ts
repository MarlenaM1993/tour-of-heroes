import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailPupUpComponent } from './hero-detail-pup-up.component';

describe('HeroDetailPupUpComponent', () => {
  let component: HeroDetailPupUpComponent;
  let fixture: ComponentFixture<HeroDetailPupUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailPupUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDetailPupUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
