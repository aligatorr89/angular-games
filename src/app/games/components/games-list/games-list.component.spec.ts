import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesListComponent } from './games-list.component';
import { GamesListElementComponent } from '../games-list-element/games-list-element.component';
import { ComponentTestInit } from '../../../shared/test/test-util';

describe('GamesListComponent', () => {
  let test: ComponentTestInit<GamesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesListComponent, GamesListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    test = new ComponentTestInit(GamesListComponent);
  });

  it('should create', () => {
    expect(test.component).toBeTruthy();
  });

  it('should have <app-games-list-element innnerHTML', () => {
    setTimeout(() => {
      expect(test.html.innerHTML).toContain('<app-games-list-element');
    }, 0);
  });
});
