import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesListGameDetailComponent } from './games-list-game-detail.component';

describe('GamesListGameDetailComponent', () => {
  let component: GamesListGameDetailComponent;
  let fixture: ComponentFixture<GamesListGameDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesListGameDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesListGameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
