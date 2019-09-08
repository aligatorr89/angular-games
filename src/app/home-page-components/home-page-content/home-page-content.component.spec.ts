import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageContentComponent } from './home-page-content.component';
import { GamesTestingModule } from '../../games/games-testing.module';

describe('HomePageContentComponent', () => {
  let component: HomePageContentComponent;
  let fixture: ComponentFixture<HomePageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageContentComponent ],
      imports: [ GamesTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
