import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageHeaderComponent } from './home-page-header.component';
import { GamesModule } from '../../games/games.module';
import { ComponentTestInit } from '../../shared/test/test-util';

describe('HomePageHeaderComponent', () => {
  let test: ComponentTestInit<HomePageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageHeaderComponent ],
      imports: [ GamesModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    test = new ComponentTestInit(HomePageHeaderComponent);
  });

  it('should create', () => {
    expect(test.component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(test.html.outerHTML).toMatchSnapshot();
  });

});
