import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { HomePageHeaderComponent } from '../home-page-header/home-page-header.component';
import { HomePageContentComponent } from '../home-page-content/home-page-content.component';
import { HomePageFooterComponent } from '../home-page-footer/home-page-footer.component';
import { GamesTestingModule } from '../../games/games-testing.module';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent, HomePageHeaderComponent, HomePageContentComponent, HomePageFooterComponent ],
      imports: [ GamesTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
