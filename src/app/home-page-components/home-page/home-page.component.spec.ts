import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { HomePageHeaderComponent } from '../home-page-header/home-page-header.component';
import { HomePageContentComponent } from '../home-page-content/home-page-content.component';
import { HomePageFooterComponent } from '../home-page-footer/home-page-footer.component';
import { GamesModule } from '../../games/games.module';
import { ComponentTestInit } from '../../shared/test/test-util';

describe('HomePageComponent', () => {
  let test: ComponentTestInit<HomePageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent, HomePageHeaderComponent, HomePageContentComponent, HomePageFooterComponent ],
      imports: [ GamesModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    test = new ComponentTestInit(HomePageComponent);
  });

  it('should create', () => {
    expect(test.component).toBeTruthy();
  });

  it('should have <app-home-page-header> and <app-home-page-content> elements', () => {
    expect(test.html.innerHTML).toContain('<app-home-page-header>');
    expect(test.html.innerHTML).toContain('<app-home-page-content>');
  });
});
