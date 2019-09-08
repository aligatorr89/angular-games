import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageHeaderComponent } from './home-page-header.component';
import { GamesTestingModule } from '../../games/games-testing.module';

describe('HomePageHeaderComponent', () => {
  let component: HomePageHeaderComponent;
  let fixture: ComponentFixture<HomePageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageHeaderComponent ],
      imports: [GamesTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
