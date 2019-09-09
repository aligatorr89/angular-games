import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageContentComponent } from './home-page-content.component';
import { GamesModule } from '../../games/games.module';
import { ComponentTestInit } from '../../shared/test/test-util';

describe('HomePageContentComponent', () => {
  let test: ComponentTestInit<HomePageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageContentComponent ],
      imports: [ GamesModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    test = new ComponentTestInit(HomePageContentComponent);
  });

  it('should create', () => {
    expect(test.component).toBeTruthy();
  });

  it('should have <app-games> element', () => {
    expect(test.html.innerHTML).toContain('<app-games>');
  });
});
