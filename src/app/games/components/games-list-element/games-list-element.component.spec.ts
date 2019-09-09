import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesListElementComponent } from './games-list-element.component';
import { ComponentTestInit } from '../../../shared/test/test-util';

describe('GamesListElementComponent', () => {
  let test: ComponentTestInit<GamesListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    test = new ComponentTestInit(GamesListElementComponent);
  });

  it('should create', () => {
    expect(test.component).toBeTruthy();
  });

  it('should have an <img bind-src="game.icon_2" innerHTML', () => {
    setTimeout(() => {
      expect(test.html.innerHTML).toContain('<img bind-src="game.icon_2"');
    }, 0);
  });
});
